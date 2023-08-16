import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  Text,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './globalStyles';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valorConvertido,setValorConvertido] = useState('')

  const buscarHandle = async () =>{
    let URL = `https://economia.awesomeapi.com.br/last/${moedaOrigem}-${moedaDestino}`
    // setValorConvertido(URL)
    try{
      let page = await fetch(URL)
      let json = await page.json()
      console.log(json)
      let indice = parseFloat(json[`${moedaOrigem}${moedaDestino}`].high)
      console.log(json[`USDBRL`].high)
    } catch (error){

    }
  }
  const limparResultado = () =>{
    setValorConvertido('')
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text> Conversor de moedas</Text>
        <View>
      <Text>Moeda 1</Text>
      <View style={styles.viewInpu}>
      <Picker
          selectedValue={moedaOrigem}
          onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dolar Americano" value="USD" />
          <Picker.Item label="Ouro" value="XAU" />
          <Picker.Item label="Bitcoin" value="BTC" />
        </Picker>
      </View>
      </View>
      <View>
      <Text>Moeda 2</Text>
      <View style={styles.viewInpu}>
      <Picker
          selectedValue={moedaDestino}
          onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dolar Americano" value="USD" />
          <Picker.Item label="Ouro" value="XAU" />
          <Picker.Item label="Bitcoin" value="BTC" />
        </Picker>
      </View>
      </View>
      <Pressable style={styles.botao} onPress={buscarHandle}><Text>Buscar valor</Text></Pressable>
      <Text>{`Resultado: ${valorConvertido}`}</Text>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}


