import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native'

const UpcomingWeather = ()=>{
    return (
        <SafeAreaView styles={styles.container}>
            <Text>Upcoming Wetaher</Text>
            <FlatList
                data={}
                renderItem={}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default UpcomingWeather