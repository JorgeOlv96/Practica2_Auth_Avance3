import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screen/HomeScreen';
import SettingsScreen from '../../../screen/SettingsScreen';
import FavoritesScreen from '../../../screen/FavoritesScreen';
import AccountScreen from '../../../screen/AccountScreen';

import { View, Image} from 'react-native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { styles } from './TabNavigation.styles';
import AuthScreen from '../../../screen/Auth/AuthScreen';
import Personajes from '../../../screen/Personajes';
import iconRick from '../../../assets/images/logo-button.png';



const TabNavigations = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
       tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      })}
      >

        <Tab.Screen 
        name="Home" 
        component={AccountScreen} 
        options={{title: 'Inicio', tabBarLabel: ''}}/>

        <Tab.Screen 
        name="Personajes" 
        component={Personajes} 
        options={{title: 'Personajes' , tabBarLabel: ''}}
        />

     

      {/*
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={{title: 'Favoritos'}} /> */}

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{title: 'Cuenta', tabBarLabel: ''}}
      />

    </Tab.Navigator>

    

  )
  
    
}
const setIcon = (route, routeStatus) => {
  let iconName = ""
  let color = "#58b14a"
  if (routeStatus.focused) {
    color = "#58b14a"
  }

  if (route.name === 'Home') {
    iconName = 'home';
  } else if (route.name === 'Settings') {
    iconName = 'cog';
  } else if (route.name === 'Favorites') {
    iconName = 'heart';
  } else if (route.name === 'Account') {
    iconName = 'heart';
  } else if (route.name === 'Personajes') {
    // Usar el componente Image con tu imagen personalizada
    return <Image source={iconRick} style={{width: 80, height: 80, marginBottom: 40 }} />;
  }

  return <AwesomeIcon name={iconName} color={color} style={styles.icon} />;
};

export default TabNavigations