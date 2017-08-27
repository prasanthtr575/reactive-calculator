import React from "react";
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import { setName } from "../actions/userActions";

class App extends React.Component {
    render() {
        return (
          <div className="container">
            <div className="row dash-bottom-border">
              <div className="col-sm-12 num-display">
                History
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 num-display">
                  Current
              </div>
            </div>
            <div className="row">
              <div className="key col-sm-5 border">
                  Prev
              </div>
              <div className="key col-sm-5 border">
                  Next
              </div>
              <div className="key col-sm-2 border">
                  Clear
              </div>
            </div>
            <div className="row">
              <div className="key col-sm-2 border">
                  7
              </div>
              <div className="key col-sm-2 border">
                  8
              </div>
              <div className="key col-sm-2 border">
                  9
              </div>
              <div className="key col-sm-4 border">
                  /
              </div>
              <div className="key col-sm-2 border">
                  Back
              </div>
            </div>
            <div className="row">
              <div className="key col-sm-2 border">
                  4
              </div>
              <div className="key col-sm-2 border">
                  5
              </div>
              <div className="key col-sm-2 border">
                  6
              </div>
              <div className="key col-sm-4 border">
                  *
              </div>
              <div className="key col-sm-2">
                  
              </div>
            </div>
            <div className="row">
              <div className="key col-sm-2 border">
                  1
              </div>
              <div className="key col-sm-2 border">
                  2
              </div>
              <div className="key col-sm-2 border">
                  3
              </div>
              <div className="key col-sm-4 border">
                  -
              </div>
              <div className="key col-sm-2">
                  =
              </div>
            </div>
            <div className="row">
              <div className="key col-sm-2 border">
                 
              </div>
              <div className="key col-sm-2 border">
                  0
              </div>
              <div className="key col-sm-2 border">
                  .
              </div>
              <div className="key col-sm-4 border">
                  +
              </div>
              <div className="key col-sm-2">
                  
              </div>
            </div>
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