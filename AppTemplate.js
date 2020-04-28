/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Button, FlatList, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppStyles from './AppStyles';

const AppTemplate = (props) => {
  const { goForAxios, fromAxios, axiosData, renderItem, dataSource, loading } = props
  return(
    <LinearGradient
    colors={['#ff7900', '#7c551a', '#003333']}
    style={AppStyles.container}
    >
      <Text style={AppStyles.welcome}>Welcome to Top 100 Crypto</Text>
      <Button
        style={AppStyles.button}
        title={'Click to refresh list'}
        onPress={goForAxios}
        color='#003333'
      />
      <FlatList
        style={AppStyles.bigList} 
        horizontal={false}
        data={dataSource}
        initialNumToRender={15}
        keyExtractor={item => item.id.toString()}
        renderItem={item => renderItem(item)}
      >
      {/* render/map() happens w/ component in App.js */}
      </FlatList>
      <Text style={AppStyles.instructions}>To get started, edit App.js</Text>
    </LinearGradient>
  )
}
export default AppTemplate;
