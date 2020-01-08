import * as Font from 'expo-font';
import React from 'react';
import { AppContainer } from './navigation/AppContainer';
import FontAwesome from './assets/fonts/FontAwesome.ttf';
import Ionicons from './assets/fonts/ionicons.ttf';


console.disableYellowBox = true;

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome,
      Ionicons
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return <AppContainer />;
  }

}

