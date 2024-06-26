import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'

const CurrentWeather =()=>{
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
      <Icon name="sun" size={32} color="blue" />
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
    alignItems: 'center',
    justifyContent: 'center'
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
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description:{
    fontSize: 48
  },
  message:{
    fontSize: 30
  }
})

export default CurrentWeather