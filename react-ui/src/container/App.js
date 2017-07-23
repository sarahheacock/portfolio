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
    last: PropTypes.number.isRequired,
    sections: PropTypes.object.isRequired
  }

  render(){
    const{ dispatch, message, current, last, sections } = this.props;
    const handleClick = bindActionCreators(AdminActionCreators.handleClick, dispatch);
    const handleScroll = bindActionCreators(AdminActionCreators.handleScroll, dispatch);
    const handleResize = bindActionCreators(AdminActionCreators.handleResize, dispatch);
    //const getData = bindActionCreators(AdminActionCreators.getData, dispatch);

    console.log("");
    // console.log("message", message);
    console.log("current", current);
    // console.log("last", last);
    console.log("sections", JSON.stringify(sections, undefined, 2));

    const sect = Object.keys(data).map((k) => (
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
          sections={sections}
          handleResize={handleResize}
        />

        <div id="main" className="content">
          {sect}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    message: state.message,
    current: state.current,
    last: state.last,
    sections: state.sections
  }
);


export default connect(mapStateToProps)(App);
