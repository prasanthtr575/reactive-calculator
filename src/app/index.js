import './scss/style.scss';

import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";

import App from "./containers/App";
import store from "./store";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('reactCalApp')
);

//------------------------------------------------------------

/*
import React from 'react';
import { render } from 'react-dom';

import { User } from './components/User';
import { Main } from './components/Main';
import { Header } from './components/Header';

class App extends React.Component {
	constructor() {
        super();
        this.state = {
            num: 0
        };
    }

    changeUsername(newName) {
        this.setState({
            username: newName
        });
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.changeUsername.bind(this)}/>
                <User username={this.state.username}/>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("reactCalApp"));
//-------------------------------------------------------------------
import {render} from "react-dom";
import React from "react";
import {createStore, combineReducers, applyMiddleware} from "redux";
import { createLogger } from 'redux-logger'

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};

const userReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

const myLogger = (state) => (next) => (action) => {
    // console.log("Logged Action: ", action);
    next(action);
};

const store = createStore(
    combineReducers({mathReducer, userReducer}),
    {},
    applyMiddleware(myLogger, createLogger())
);

store.subscribe(() => {
    // console.log("Store updated!", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 100
});
store.dispatch({
    type: "ADD",
    payload: 22
});
store.dispatch({
    type: "SUBTRACT",
    payload: 80
});
store.dispatch({
    type: "SET_AGE",
    payload: 30
});
*/