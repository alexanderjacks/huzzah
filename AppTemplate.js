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
  const { goForAxios, fromAxios, axiosData, renderItem, FlatListItemSeparator, dataSource, loading } = props
  return(
    <LinearGradient
    colors={['#ff7900', '#7c551a', '#003333']}
    style={AppStyles.container}
    >
      <Text style={AppStyles.welcome}>Welcome to Top 100 Crypto</Text>
      <View style={{ margin: 18 }}>
      <Button
        style={AppStyles.button}
        title={'Click to API some data'}
        onPress={goForAxios}
        color='#003333'
      />
      </View>
      <FlatList
        data={dataSource}
        ItemSeparatorComponent={FlatListItemSeparator}
        keyExtractor={item => item.id.toString()}
        renderItem={item => renderItem(item)}
      >
      {/*
        begin map()
      */}
          <Text style={AppStyles.buttonText}>
            Items inc...
          </Text>
      {/*
        end map()
      */}
      </FlatList>
      <Text style={AppStyles.instructions}>To get started, edit App.js</Text>
    </LinearGradient>
  )
}
export default AppTemplate;
