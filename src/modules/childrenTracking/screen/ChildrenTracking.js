import {Provider} from "react-redux";
import React, { Component } from "react";

const MainComponent = require("./Main").default;
const store = require("../redux/Redux").default;

export default class ChildrenTracking extends Component{
  render(){
    return (
      <Provider store={store}>
        <MainComponent/>
      </Provider>
    )
  }
}