import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './globalStyles';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valorConvertido,setValorConvertido] = useState('')
  const [valorOriginal, setValorOriginal] = useState('99.99999')

  const buscarHandle = async () =>{
    let URL = `https://economia.awesomeapi.com.br/last/${moedaOrigem}-${moedaDestino}`
    // setValorConvertido(URL)
    try{
      let page = await fetch(URL)
      let json = await page.json()
      console.log(json)
      let indice = parseFloat(json[`${moedaOrigem}${moedaDestino}`].high)
      // setValorConvertido(indice)
      console.log(indice)
      let resu = (indice*valorOriginal)
      setValorConvertido(resu)
      // console.log(json[`USDBRL`].high)
    } catch (error){
      setValorConvertido(`Erro: ${error.message}`)
    }
  }
  const limparResultado = () =>{
    setValorConvertido('')
    setValorOriginal('33.3333')
    setMoedaOrigem('BRL')
    setMoedaDestino('USD')
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Conversor de moedas</Text>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Text>Moeda 1</Text>
      <View style={styles.viewInpu}>
      <Picker
          selectedValue={moedaOrigem}
          onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}
          style={{width:200}}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dolar Americano" value="USD" />
          <Picker.Item label="Ouro" value="XAU" />
          <Picker.Item label="Bitcoin" value="BTC" />
        </Picker>
      </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Text>Moeda 2</Text>
      <View style={styles.viewInpu}>
      <Picker
          selectedValue={moedaDestino}
          onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}
          style={{width:200}}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dolar Americano" value="USD" />
          <Picker.Item label="Ouro" value="XAU" />
          <Picker.Item label="Bitcoin" value="BTC" />
        </Picker>
      </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <View style={styles.viewInput}>
        <TextInput value={valorOriginal} onChangeText={setValorOriginal} keyboardType='numeric'/>
      </View>
      </View>
      <View>
      <Pressable style={styles.botao} onPress={buscarHandle}><Text>Buscar valor</Text></Pressable>
      <Pressable style={styles.botao} onPress={limparResultado}><Text>Limpar valor</Text></Pressable>
      </View>
      <Text style={{textAlign:'center'}}>{`Resultado: ${valorConvertido}`}</Text>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}


