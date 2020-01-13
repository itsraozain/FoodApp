import React from 'react';
import {Text, View, Button,StyleSheet,FlatList } from 'react-native';
import resturants from './resturants';

const ResultList=({title,results})=>{
    return(
        <View>
            <Text style={styles.Title}>{title}</Text>
            <FlatList 
            horizontal
            data={results}
            keyExtractor={result=>result.id}
            renderItem={({item})=>{
            return <resturants
            restro={item}
            />
            }}
            />
        </View>
    );
};

const styles=StyleSheet.create({
    Title:{
        fontSize:18,
        fontWeight:'bold'
    }
});

export default ResultList;