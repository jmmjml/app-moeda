import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  Text,
  Image,
  View,
  TextInput,
  Switch,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  VirtualizedList,
} from 'react-native';
import styles from './globalStyles';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Text>Moeda 1</Text>
      <View style={styles.viewInput}>
      <TextInput>hy</TextInput>
      <AntDesign name="caretdown" size={15} color="black" />
      </View>
      <Text>Moeda 2</Text>
      <View style={styles.viewInput}>
      <TextInput>hy</TextInput>
      <AntDesign name="caretdown" size={15} color="black" />
      </View>
      
      <StatusBar style="auto" />
      </View>
    </View>
  );
}


