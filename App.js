/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import AppView from './AppView';

import firebase from '@react-native-firebase/app';

// TODO(you): import any additional firebase services that you require for your app, e.g for auth:
//    1) install the npm package: `yarn add @react-native-firebase/auth@alpha` - you do not need to
//       run linking commands - this happens automatically at build time now
//    2) rebuild your app via `yarn run run:android` or `yarn run run:ios`
//    3) import the package here in your JavaScript code: `import '@react-native-firebase/auth';`
//    4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

const firebaseCredentials = Platform.select({
  ios: 'https://invertase.link/firebase-ios',
  android: 'https://invertase.link/firebase-android',
});

type Props = { loading:false, dataSource:[], goForAxios:null };

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      loading:false,
      dataSource:[]
    }
  }

  goForAxios = () => {
    this.setState({
      loading: true,
    })
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log('Getting your data rdy...', response.data);
        this.setState({
          loading: false,
          dataSource: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
  renderItem = (data) => {
    return(
      <TouchableOpacity style={styles.list}>
        <Text style={styles.lightText}>{data.item.name}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { dataSource, FlatListSeparator, goForAxios } = this.state
    return (
      <AppView
        goForAxios={this.goForAxios}
        dataSource={dataSource}
        loading={loading}
        fromAxios={fromAxios}
        axiosData={axiosData}
        FlatListSeparator={this.FlatListSeparator}
        renderItem={this.renderItem}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#003333',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Menlo',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  list: {
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  lightText: {
    color: 'snow',
    fontSize: 14,
    textAlign: 'center',
    margin: 4,
  },
});
