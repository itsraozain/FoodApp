import React,{useState} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';


const SearchScreen=()=>{
    const [term,setterm] = useState('');
    const [error,results,searchapi]=useResults();

    const searchresultbyprice=Price=>{
        return results.filter(result=>{
            return result.Price===Price;
        })
    }
    
    return(
        <View>
            <SearchBar
            term={term}
            onTermChange={newterm=>setterm(newterm)}
            onTermSubmit={()=>searchapi(term)}
            />
            
            {error ?<Text>{error}</Text>:null}
            <Text>We found {results.length} result</Text>

            <ResultList results={searchresultbyprice('$')} title="Cost Effective" />
            <ResultList results={searchresultbyprice('$$')} title="Bit Price" />
            <ResultList results={searchresultbyprice('$$$')} title="Big Spender" />
        </View>
    );

};

const styles=StyleSheet.create({

});

export default SearchScreen;