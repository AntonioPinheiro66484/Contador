import React, {useState} from 'react'
import {Text,Button, StyleSheet} from 'react-native'


 export default comp =>{
    const [numero, setNumero]=useState(comp.inicial)
    const inc =()=>setNumero(numero*2)
    const dec =()=>setNumero(numero/2)

    return (
        <>
            <Text style={styles.FontGrande}>Contador de 25 em 25</Text>
            <Text style={styles.FontMedia}>{numero}</Text>
            <Button title=" + " onPress={inc}/>
            <Button title=" - " onPress={dec}/>
        </>
    )
}

const styles = StyleSheet.create({
    FontGrande:{
        fontSize:30,
        fontFamily:'Times New Roman'
    },
    FontMedia:{
        fontSize:20,
        fontFamily:'Arial'
    }
  });