import React from 'react'
import  { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Avatar,Button } from 'react-native-paper';
import { useAuth } from '../hooks/UseAuth';
import { globalStyles } from '../../styles';


export default function AccountScreen() {
  const { auth, logout, user } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <TouchableOpacity>
          <FontAwesome
            name="search"
            size={24}
            color="black"
          />
        </TouchableOpacity> */}

        {/* <Text>Hola</Text> */}
        <Avatar.Image
          size={160}
          source={require("../assets/images/perfil.png")}
        />

        </View>
       
       <Text style={styles.layout}>Nombre: {user.username}</Text> 
       <Text style={styles.layout}>Email: {user.email}</Text> 
    
      <View style={styles.footer}></View>

      <View>
      <Button mode="contained" style={globalStyles.form.buttonSubmit} onPress={logout}> Salir </Button>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
   //backgroundColor: "red",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    //backgroundColor: "blue",
  },
  layout: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',    
  }
})
