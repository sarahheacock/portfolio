import React, { Component } from 'react';
import PropTypes from 'prop-types';

//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AdminActionCreators from '../actions/admin';

//components
import Header from '../components/Header';
import Section from '../components/Section';

//content
import { data } from '../data/data';


class App extends Component {
  static propTypes = {
    message: PropTypes.bool.isRequired,
    current: PropTypes.string.isRequired,
    last: PropTypes.number.isRequired
  }

  render(){
    const{ dispatch, message, current, last } = this.props;
    const handleClick = bindActionCreators(AdminActionCreators.handleClick, dispatch);
    const handleScroll = bindActionCreators(AdminActionCreators.handleScroll, dispatch);
    //const getData = bindActionCreators(AdminActionCreators.getData, dispatch);

    console.log("");
    console.log("message", message);
    console.log("current", current);
    console.log("last", last);

    const sections = Object.keys(data).map((k) => (
      <Section
        key={k}
        link={k}
        data={data[k]}
      />
    ));

    return (
      <div className="container-fluid">
        <Header
          links={Object.keys(data)}
          current={current}
          handleScroll={handleScroll}
          handleClick={handleClick}
        />

        <div id="main" className="content">
          {sections}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    message: state.message,
    current: state.current,
    last: state.last
  }
);


export default connect(mapStateToProps)(App);
