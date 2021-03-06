import React, { Component } from 'react';
import PropTypes from 'prop-types';

//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AdminActionCreators from '../actions/admin';

//components
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';

//content
import { data } from '../data/data';


class App extends Component {
  static propTypes = {
    project: PropTypes.number.isRequired,
    message: PropTypes.object.isRequired,
    current: PropTypes.string.isRequired,
    last: PropTypes.number.isRequired
  }


  render(){
    const{ dispatch, message, current, last, project } = this.props;
    const handleScroll = bindActionCreators(AdminActionCreators.handleScroll, dispatch);
    const updateState = bindActionCreators(AdminActionCreators.updateState, dispatch);
    const sayHello = bindActionCreators(AdminActionCreators.sayHello, dispatch);
    //const getData = bindActionCreators(AdminActionCreators.getData, dispatch);

    console.log("");
    console.log("project", project);
    console.log("message", message);
    console.log("current", current);
    console.log("last", last);


    const sect = Object.keys(data).map((k) => (
      <Section
        key={k}
        link={k}
        project={project}
        data={data[k]}
        message={message}
        updateState={updateState}
        sayHello={sayHello}
      />
    ));

    return (
      <div className="container-fluid">

        <Header
          links={Object.keys(data)}
          current={current}
          handleScroll={handleScroll}
          last={last}
        />

        <div id="main" className="content">
          {sect}
        </div>

        <Footer
        />

      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    project: state.project,
    message: state.message,
    current: state.current,
    last: state.last
  }
);


export default connect(mapStateToProps)(App);
