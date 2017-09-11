import React from "react";
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import { History } from "../components/display/History";
import { Current } from "../components/display/Current";
import { Keypad } from "../components/keyboard/Keypad";

import { setName } from "../actions/userActions";
import { collectDigit, clearAllCalc, clearLastDigit } from "../actions/keyActions";
  
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <History/>
        <Current num={this.props.calc.num}/>
        <Keypad keyFunc={this.props.keyFunc}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
      math: state.math,
      calc: state.calc
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },
    keyFunc: {
      collectDigit: (keyValue) => {
        dispatch(collectDigit(keyValue));
      },
      goPrevCalc: (keyValue) => {
        dispatch(goPrevCalc(keyValue));
      },
      goNextCalc: (keyValue) => {
        dispatch(goNextCalc(keyValue));
      },
      clearAllCalc: (keyValue) => {
        dispatch(clearAllCalc(keyValue));
      },
      clearLastDigit: (keyValue) => {
        dispatch(clearLastDigit(keyValue));
      },
      getResult: (keyValue) => {
        dispatch(getResult(keyValue));
      },
      divide: (keyValue) => {
        dispatch(divide(keyValue));
      },
      multiply: (keyValue) => {
        dispatch(multiply(keyValue));
      },
      subtract: (keyValue) => {
        dispatch(subtract(keyValue));
      },
      add: (keyValue) => {
        dispatch(add(keyValue));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);