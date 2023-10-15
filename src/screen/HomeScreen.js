import React from 'react'
import  { View, Text } from 'react-native'
import { useAuth } from '../hooks/UseAuth';
import { TextInput, Button } from 'react-native-paper';
import { globalStyles } from '../../styles';


const HomeScreen = () => {
  const {logout, user} = useAuth();
  console.log("USER BBlin", user)
  return (
    <View>
      

        <Button mode="contained" style={globalStyles.form.buttonSubmit} onPress={logout}> Salir </Button>
    </View>
  )
}

export default HomeScreen