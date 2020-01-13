import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';


const resturants=({restro})=>{
    return <View>
        <Image source={{uri:restro.image_url}} />
        <Text>
            {restro.name}
        </Text>
    </View>
}

const styles=StyleSheet.create({
    image:{
        width:250,
        height:120,

    }
})

export default resturants;