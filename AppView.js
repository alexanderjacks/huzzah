/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = { loading:false, dataSource:[], goForAxios:null };

export default class AppView extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      loading:false,
      dataSource:[]
    }
  }
  FlatListSeparator = () => {
    return(
      <View style={styles.flatListSeparator}
      />
    );
  }

  render(){
    <LinearGradient
    colors={['#ff7900', '#7c551a', '#003333']}
    style={styles.container}
    >
      <Text style={styles.welcome}>Welcome to Top 100 Crypto</Text>
      <View style={{ margin: 18 }}>
      <Button
        style={styles.button}
        title={'Click to API some data'}
        onPress={goForAxios}
        color='#003333'
      />
      </View>
      <FlatList
        ItemSeparatorComponent={FlatListSeparator}
        keyExtractor={item => item.id.toString()}
        renderItem={item => renderItem(item)}
      >
      {/*
        begin map()
      */}
          <Text style={styles.buttonText}>
            Items inc...
          </Text>
      {/*
        end map()
      */}
      </FlatList>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      {!firebase.apps.length && (
        <Text style={styles.instructions}>
          {`\nYou currently have no Firebase apps registered, this most likely means you've not downloaded your project credentials. Visit the link below to learn more. \n\n ${firebaseCredentials}`}
        </Text>
      )}
    </LinearGradient>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  flatListSeparator: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
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
