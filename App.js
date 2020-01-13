import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const Navigator=createStackNavigator({

    search:SearchScreen

    
},{
    initialRouteName:'search',
    defaultNavigationOptions:{
        title:'Buisness Search'
    }
});

export default createAppContainer(Navigator);