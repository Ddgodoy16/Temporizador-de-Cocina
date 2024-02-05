import React from 'react';
import { View, Button, Alert } from 'react-native';
import { styles } from './Styles';

export const Comenzar = ({ handleStart }) => {
  return (
    <View style={styles.centeredContainer}>
      <View style={styles.fixToText}>
        <Button title="Comenzar" 
        onPress={handleStart} />
            </View>
    </View>
  );
};