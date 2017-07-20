import React, { Component } from 'react';
import PropTypes from 'prop-types';

//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AdminActionCreators from '../actions/admin';

//components
import Header from '../components/Header';
import Section from '../components/Section';

class App extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    message: PropTypes.bool.isRequired,
    current: PropTypes.string.isRequired
  }

  render(){
    const{ dispatch, data, message, current } = this.props;
    //turns an object whose values are action creators (functions)
    //and wraps in dispatch (what causes state change)

    const updateState = bindActionCreators(AdminActionCreators.updateState, dispatch);
    const getData = bindActionCreators(AdminActionCreators.getData, dispatch);



    console.log("");
    console.log("data", data);
    console.log("message", message);
    console.log("current", current);
    console.log(window.location);

    if(window.location.hash.slice(1) !== current){
      //everytime current is updated, so is the url
      const domain = `${window.location.origin}#${current}`;
      window.location.href = domain;

      //const element = document.getElementById(current);
      // const content = document.getElementById("main");
      // if(window.location.hash.slice(1) === current){
      //   // const newOffset = element.offsetTop;
      //   //console.log("new", newOffset);
      //
      //   // const off = content.offsetTop;
      //   // console.log("off", off);
      //   content.style["margin-top"] = `${0}px`;
      //   content.style.transition = 'all';
      // }

      //updateState({current: window.location.hash.slice(1)});
    }

    const sections = Object.keys(data).map((k) => (
      <Section
        key={k}
        link={k}
        data={data[k]}
        getData={getData}
        updateState={updateState}
        current={current}
      />
    ));

    return (
      <div className="container-fluid">
        <Header
          links={Object.keys(data)}
          current={current}
          updateState={updateState}
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
    data: state.data,
    message: state.message,
    current: state.current
  }
);


export default connect(mapStateToProps)(App);
