import React from "react";
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import { History } from "../components/display/History";
import { Current } from "../components/display/Current";
import { Key } from "../components/keyboard/Key";
import { KeyRow } from "../components/keyboard/KeyRow";
import { KeyList } from "../components/keyboard/KeyList";

import { setName } from "../actions/userActions";
  
  class App extends React.Component {
    render() {
      var rows = KeyList.map((rows, i) => {
        return <KeyRow keys={rows.keys} key={i}/>
      });

      return (
        <div className="container">
          <History/>
          <Current/>
          { rows }
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