import React from 'react'
import  { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigations from './TabNavigation/TabNavigations';
import InfoRM from '../InfoRM';


const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="TabNavigations"
            component={TabNavigations}
            options={{headerShown: false}}
            />

          <Stack.Screen
              name="InfoRM"
              component={InfoRM}
              options={{headerShown: true, title: 'Información'}}
          />
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation