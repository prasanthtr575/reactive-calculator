import React from "react";
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import { History } from "../components/display/History";
import { Current } from "../components/display/Current";
import { Keypad } from "../components/keyboard/Keypad";

import { setName } from "../actions/userActions";
  
  class App extends React.Component {
    render() {
      return (
        <div className="container">
          <History/>
          <Current/>
          <Keypad/>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
      math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);