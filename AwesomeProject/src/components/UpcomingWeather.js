import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar } from 'react-native'
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
        <Text>Empty</Text>
    </View>
)

const Item = (props)=>{
    const {name, something} = props
    return (
        <View>
            <Icon name="sun" size={32} color="orange" />
            <Text>{name}</Text>
            <Text>{something}</Text>
        </View>
    )
}


const UpcomingWeather = ()=>{
    const renderItem = ({item})=>(
        <Item name={item.name} something={item.something}/>
    )
    return (
        <SafeAreaView styles={styles.container}>
            <Text>Upcoming Wetaher</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                ItemSeparatorComponent={()=><View style={{backgroundColor:'red', height:2}}></View>}
                ListEmptyComponent={<Empty/>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0
    }
})

export default UpcomingWeather