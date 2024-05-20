import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, Image, ImageBackground, ImageBackgroundBase } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

const DATA = [
    {
        name: "Paul",
        something: "Will make it"
    },
    {
        name: "Yang",
        something: "Will be there"
    },
    {
        name: "Wish",
        something: "Will be true"
    }

]

const Empty =()=>(
    <View>
        <Text >Empty</Text>
    </View>
)

const Item = (props)=>{
    const {name, something} = props
    return (
        <View style={styles.item}>
            <Icon name="sun" size={32} color="orange" />
            <Text style={styles.temp}>{name}</Text>
            <Text style={styles.temp}>{something}</Text>
        </View>
    )
}


const UpcomingWeather = ()=>{
    const renderItem = ({item})=>(
        <Item name={item.name} something={item.something}/>
    )
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../assets/upcoming-background.jpeg')} style={styles.image}>
            <Text>Upcoming Weather</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                ItemSeparatorComponent={()=><View style={{backgroundColor:'red', height:2}}></View>}
                ListEmptyComponent={<Empty/>}
            />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    item:{
        padding:20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp:{
        color: 'white',
        fontSize: 20
    },
    image:{
       flex:1
    }
})

export default UpcomingWeather