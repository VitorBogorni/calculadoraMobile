import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Botao(props){

        return (
        <View style={{backgroundColor:'black',borderColor:'white',borderWidth:1,width:120,height:100, margin:5}}>
        <TouchableOpacity onPress={()=>props.logicaCalculadora(props.numero)} style={{width:120,height:100,justifyContent:'center',alignItems:'center', backgroundColor:'gray'}} 
        ><Text style={{fontSize:24,color:'white'}}>{props.numero}</Text>
        </TouchableOpacity>
        </View>
        );
}