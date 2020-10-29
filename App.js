import React, { Component } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import Routes from "./Routes";
export default class App extends Component {
  state = {
    fontIsLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      SemiBold: require("./assets/fonts/Montserrat-SemiBold.otf"),
      Bold: require("./assets/fonts/Montserrat-Bold.otf"),
      ExtraBold: require("./assets/fonts/Montserrat-ExtraBold.otf"),
      Medium: require("./assets/fonts/Montserrat-Medium.otf"),
      Regular: require("./assets/fonts/Montserrat-Regular.otf")
    });
    this.setState({ fontIsLoaded: true });
  }
  render() {
    return this.state.fontIsLoaded === true ? <Routes /> : <AppLoading />;
  }
}
