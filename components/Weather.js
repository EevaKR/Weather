import { View, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Position from './Position'
import { StyleSheet } from 'react-native'

// const api = {
// url: process.env.EXPO_PUBLIC_API_URL,
// key: process.env.EXPO_PUBLIC_API_KEY,
// icons: process.env.EXPO_PUBLIC_ICONS_URL

// }

const url = 'https://api.openweathermap.org/data/2.5/weather?'
const api = 'd2b9a25438ee6f8cb8acb14777d09960'

export default function Weather(lat,lon) {
  const [temp, setTemp] = useState('')
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState('')

  useEffect(() => {
    const url = api.url +
      'lat=' + lat +
      '&lon=' + lon +
      '&units=metric' +
      '&lang=fi' +
      '&appid=' + api.key

    fetch(url)
      .then(response => response.json())
      .then((json) => {
        console.log(json)
        setTemp(json.main.temp)
        //setDescription(json.weather[0].description)
        //setIcon(api.icons + json.weather[0].icon + '@2x.png')
      }).catch((error) => {
        setDescription("Error retrieving weather information.")
        console.log(error)
      })
  }, [])


  return (
    <View>
      <Text style={styles.temp}>{temp}</Text>
      {icon &&
      <Image source={{uri: icon}} style= {{width:100, height: 100}}/>
      }
       <Text>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      
      backgroundColor: '#FF0000',
      
  },
  temp: {
      
      backgroundColor: '#00FFFF',
      
  },
});