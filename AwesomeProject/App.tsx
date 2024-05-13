/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { Feather } from '@expo/vector-icons';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'

const App =()=>{
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
      <Feather name="sun" size={24} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
        </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>It's sunny</Text>
          <Text style={styles.message}>It's perfect t-shirt weather</Text>
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: 'pink',
    flex:1
  },
  container:{
    flex:1,
    alignItems: 'center'
  },
  temp:{
    color: 'black',
    fontSize: 48
  },
  feels:{
    fontSize: 30,
    color: 'black'
  },
  highLow:{
    color:'black',
    fontSize: 20
  },
  highLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  description:{
    fontSize: 48
  },
  message:{
    fontSize: 30
  }
})

export default App