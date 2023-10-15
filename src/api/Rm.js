import { View, Text, FlatList, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ENV } from '../utils/constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import Cards from '../components/Cards'
import { useNavigation } from '@react-navigation/native';



export default function Rm() {
    const navigation = useNavigation();

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reponse = await axios.get(`${ENV.API_URL_RM}`)
                setCharacters(reponse.data.results)
                console.log("characters", characters)
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    },[])

  return (
    <SafeAreaView>
     
        <FlatList

            data={characters}
            showsVerticalScrollIndicator={false}
            keyExtractor={(characters) => String(characters.id)}
            renderItem={({item}) => (
                
    
               <Cards characters={item} navigation={navigation}/>
            )}
          
        />

    
       
    </SafeAreaView>
  )
}