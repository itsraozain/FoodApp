import {useEffect,useState} from 'react';
import yelp from '../api/yelp';

export default ()=>{
    const [results,setResult]=useState([]);
    const [error,seterror]=useState('');

    

    const searchapi=async (searchTerm)=>{
        try{
        const response=await yelp.get('/search',{
            params:{
                limit:50,
                term: searchTerm,
                location:'san jose'
            }
        });
        setResult(response.data.businesses);
        }catch(err){
            seterror('Something went wrong')
        }
    };

    useEffect(()=>{
        searchapi('pasta');
    },[]);

    return[error,results,searchapi]
};