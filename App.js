/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import axios from 'axios';
import { Platform, Text, View, TouchableOpacity } from 'react-native';
import AppTemplate from './AppTemplate';
import AppStyles from './AppStyles';
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
    this.state = {
      loading: false,
      dataSource: [],
      fromAxios: false,
      axiosData: null
    };
  }
  goForAxios = () => {
    this.setState({
      loading: true,
      fromAxios: true,
    })
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log('Getting your data rdy...', response.data);
        setTimeout(() => {
          this.setState({
            loading: false,
            dataSource: response.data
          })
        }, 3000)
      })
      .catch(error => {
        console.log(error);
      });
  }
  FlatListSeparator = () => {
    return (
      <View style={{
        height: 0.5,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
      />
    );
  }
  renderItem = (data) => {
    return(
      <TouchableOpacity style={AppStyles.list}>
        <Text style={AppStyles.lightText}>{data.item.name}</Text>
        <Text style={AppStyles.lightText}>{data.item.email}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const { dataSource, loading, axiosData, fromAxios } = this.state;
    return (
      <AppTemplate
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
