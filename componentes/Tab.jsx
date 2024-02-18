

import Icon from 'react-native-vector-icons/Ionicons'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from './pantallas/home';
import { Recetas } from './pantallas/MisRecetas';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>{
            let nombreIcono

            switch (route.name) {
                case 'Home':
                    nombreIcono = focused ? "home" : "home-outline"
                    break;

               
            
                default:
                    nombreIcono = focused ? "form" : "outline"
                    break;
            }
            return <Icon name={nombreIcono} size={size} color={color} />
        }
    })}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Recetas" component={Recetas} />
                 </Tab.Navigator>
}