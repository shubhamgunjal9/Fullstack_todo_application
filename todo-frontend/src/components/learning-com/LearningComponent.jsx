import React, { Component } from "react";
import MyFirstComponenet from "../learning-examples/FirstComponent";
import MySecondComponent from "../learning-examples/SecondComponent";
import FourthComponenet from "../learning-examples/FourthComponent";
import ThirdComponent, {
  FifthComponent,
} from "../learning-examples/ThirdComponent";
import LearningJs from "./LearningJs";

export default class LearningComponent extends Component {
  render() {
    return (
      <>
        <h1>hello welcome to TODO app</h1>
        <MyFirstComponenet data="shubham" value="my name is js" />
        <MySecondComponent />
        <ThirdComponent />
        <FifthComponent />
        <FourthComponenet />
        <LearningJs/>
      </>
    );
  }
}
