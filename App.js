import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import Botao from './botao';

export default function App() {

  console.disableYellowBox  = true;
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sinal, setSinal] = useState("");


  const [stringCalculo, setStringCalculo] = useState("0");

  var numeros = [];

  for(var i = 0; i <= 9; i++){
      numeros.push(i);
  }

  function logicaCalculadora(n){
        if(sinal == ""){
            setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
            setStringCalculo(parseInt(firstNumber.toString() + n.toString()));
        }

        if((n == "/" || n == "*" || n == "+" || n =="-" || n =='%') && secondNumber == 0){
            setStringCalculo(firstNumber.toString() + n);
            setSinal(n);
        }

        if(sinal != ""){
            setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
            setStringCalculo(firstNumber+sinal+parseInt(secondNumber.toString() + n.toString()));
        }

        if(n == "="){
            let resultado = 0;
            if(sinal == "+"){
                resultado = firstNumber+secondNumber;
            }else if(sinal == "-"){
              resultado = firstNumber-secondNumber;
            }
            else if(sinal == "/"){
              resultado = firstNumber/secondNumber;
            }
            else if(sinal == "*"){
              resultado = firstNumber*secondNumber;
            }
            else if(sinal == "%"){
              resultado = secondNumber * (firstNumber / 100);
            }
            setStringCalculo(resultado);
            setSinal("");
            setFirstNumber(resultado);
            setSecondNumber(0);
        }
       
        if(n == "clear"){
          let resultado = 0;
            setStringCalculo(resultado);
            setSinal("");
            setFirstNumber(resultado);
            setSecondNumber(0);
        }
       
  }
 
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
      <Text style={{color:'white', fontSize:16, textAlign:'center', fontWeight:'bold'}}>CALCULADORA</Text>
      <StatusBar hidden />
      <View style={styles.topo}><Text style={{fontSize:24,color:'white'}}>{stringCalculo}</Text></View>
      
      <View style={{flexDirection:'row',alignItems:'center', borderWidth:3, bottom:5}}>
        <TouchableOpacity onPress={()=>logicaCalculadora('+')} style={{width:'14.2%',backgroundColor:'rgb(20,20,20)'
        ,justifyContent:'center',alignItems:'center',height:70, borderRadius:100}}>
          <Text style={{fontSize:24,color:'white'}}>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logicaCalculadora('-')} style={{width:'14.2%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:70, borderRadius:100}}>
          <Text style={{fontSize:24,color:'white'}}>-</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={()=>logicaCalculadora('/')} style={{width:'14.2%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:70, borderRadius:100}}>
          <Text style={{fontSize:24,color:'white'}}>/</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={()=>logicaCalculadora('*')} style={{width:'14.2%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:70, borderRadius:100}}>
          <Text style={{fontSize:24,color:'white'}}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>logicaCalculadora('%')} style={{width:'14.2%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:70, borderRadius:100}}>
          <Text style={{fontSize:24,color:'white'}}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>logicaCalculadora('clear')} style={{width:'14.2%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:70, borderRadius:100}}>
          <Text style={{fontSize:24,color:'white'}}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>logicaCalculadora('=')} style={{width:'14.2%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:70, borderRadius:100}}>
          <Text style={{fontSize:24,color:'white'}}>=</Text>
          </TouchableOpacity>

      </View>
      
      <View style={{flexDirection:'row',flexWrap:'wrap',borderTopColor:'black',borderTopWidth:2,height:'66.8%', justifyContent:'center'}}>
          {
            numeros.map(function(e){
            return (<Botao logicaCalculadora={logicaCalculadora} numero={e}></Botao>);
            })
          }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
      topo:{
        borderWidth:1,
        backgroundColor:'rgb(20,20,20)',
        height:'16.6%',
        justifyContent:'center',
        paddingLeft:20,
        borderColor:'white',
        marginBottom: 5
      }
});
