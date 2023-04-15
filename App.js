import React from 'react'
import { StyleSheet, View } from 'react-native';
import Contador1 from './src/components/Contador25em25.js'
import Contador2 from './src/components/ContadorMultiplosde2.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Contador1 inicial={500}/>
      <Contador2 inicial={2}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#AC9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});