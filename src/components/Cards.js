import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper';


export default function Cards(props) {
    const {characters } = props;

    const goToPersonaje = () =>{
      props.navigation.navigate('InfoRM', { characters })
    }
  return (
    <TouchableOpacity onPress={goToPersonaje} >
        
    <Card style={{  backgroundColor: 'black', margin: 10, padding: 10, borderWidth: 2, borderColor: 'gray', borderRadius: 20 }}>
      <Card.Title
          
          titleStyle={{color: 'white', paddingLeft:20 }}
          title={characters.name}
          subtitle={characters.species}
          subtitleStyle={{color: 'white', paddingLeft:20}}
          left={(props) =><Avatar.Image  source={{ uri: characters.image }}/>}
          right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
        />
</Card>
    </TouchableOpacity>
  )
}