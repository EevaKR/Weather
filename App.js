import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Position from './components/Position';
import Weather from './components/Weather';



// const URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
// const APIKEY = 'd2b9a25438ee6f8cb8acb14777d09960'


export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.heading}>Current weather</Text>
      <Position />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//units, vaihda yksiköt metreiksi yms


