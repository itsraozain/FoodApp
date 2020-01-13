import React from 'react';
import {Text,View,StyleSheet,TextInput, Button} from 'react-native';
import {Feather} from '@expo/vector-icons';


const SearchBar=(term,onTermChange,onTermSubmit)=>{
    return(
        
        <View style={styles.background}>
            <Feather name="search" style={styles.icon} />
            <TextInput
            autoCapitalize="none"
            autoCorrect={false}
             style={styles.search}
             placeholder="Search"
             value={term}
             onChangeText={newterm=>onTermChange(newterm)} 
             onEndEditing={newterm=>onTermSubmit(newterm)}

              />
           
            
            
        </View>
        
    );

};

const styles=StyleSheet.create({
    background:{
        marginVertical:10,
        backgroundColor:'#f0EEEE',
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:"row"
    },
    search:{
        fontSize:20,
        flex:1
        
    },
    icon:
    {
        fontSize:30,
        alignSelf:'center',
        marginHorizontal:10
        
    }
});

export default SearchBar;