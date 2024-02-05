import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { styles } from './Styles';

export const NumericInput = ({ onTimeChange }) => {
  const [number, onChangeNumber] = useState('');

  const handleInputChange = (value) => {
    onChangeNumber(value);
    const minutes = parseInt(value, 10);
    const seconds = minutes * 60;
    onTimeChange(seconds);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>Ingrese los minutos</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={number}
        placeholder=" "
        keyboardType="numeric"
      />
    </View>
  );
};
