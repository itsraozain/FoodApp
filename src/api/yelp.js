import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer vvghraLqsMOg85qvgJt3ud7Pk77pW6f9eHfgXKME1YSngRJwiBo36bnUSN5jGPQKE28FXm9j82_yGTt1qBltsMfRturYJmHl49FPFUJPgSHwggqywfAOAi21ZdsIXnYx'
    }
});