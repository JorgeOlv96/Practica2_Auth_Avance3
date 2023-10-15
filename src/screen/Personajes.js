import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Rm from '../api/Rm'


export default function Personajes() {
  return (
    <View >
         <ImageBackground
            source={require('../assets/images/fondo.jpg')}
         >
        <Rm/>
        </ImageBackground>
    </View>
  )
}