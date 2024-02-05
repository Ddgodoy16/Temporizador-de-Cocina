import React, { useState, useEffect} from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { Encabezado, Encabezado2 } from './componentes/Encabezado';
import { NumericInput } from './componentes/TextInput';
import {Comenzar} from './componentes/Button';
import { Logo } from './componentes/logo';
import { Timer } from './componentes/Timer';
import { Alert } from 'react-native';
import { styles } from './componentes/Styles';

export default function App() {
  const [time, setTime] = useState(0);
  const [intervalActive, setIntervalActive] = useState(false);

  const handleStart = () => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(intervalId);
          setIntervalActive(false);
          Alert.alert('¡Tiempo completado! ¡A disfrutar!');
          return 0; 
        }
      });
    }, 1000); 
    setIntervalActive(true);
  };

  const handleTimeChange = (seconds) => {
    setTime(seconds);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Logo></Logo>
        <Encabezado></Encabezado>
        <Encabezado2></Encabezado2>
        <NumericInput onTimeChange={handleTimeChange} />
        <Comenzar handleStart={handleStart} />
        <Timer Time={time}/>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}