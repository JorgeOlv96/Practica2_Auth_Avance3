import React, { useEffect, useState} from 'react'
import  { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Image, ImageBackground} from 'react-native'

import Login from '../../components/auth/login/Login';
import Register from '../../components/auth/register/Register';

import rickymorty from '../../assets/rickymorty.png';

import {styles} from './AuthScreen.styles'
import logo from '../../assets/images/logorym.png';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);

  const cambioAuth = () => {
    setIsLogin(!isLogin);
  }

  const showLogin = () => {
    setIsLogin(prenState => !prenState)
  }


  return (
    <View style={styles.cotainer}>
      <ImageBackground source={require('../../assets/images/fondo.jpg')} style={styles.fondo}>
      <Image style={styles.image} source={logo} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
        {isLogin ? <Login cambioAuth = { cambioAuth } showLogin = { showLogin } /> : <Register cambioAuth = { cambioAuth } showLogin = { showLogin }/>}
      </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

