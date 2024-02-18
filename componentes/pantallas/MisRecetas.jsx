import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export const Recetas = () => {
  const [recetas, setRecetas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [instrucciones, setInstrucciones] = useState('');

  const handleAgregarReceta = () => {
    if (!nombre.trim() || !ingredientes.trim() || !instrucciones.trim()) {
      alert('Por favor, completa todos los campos para agregar la receta.');
      return;
    }

    const nuevaReceta = {
      nombre: nombre.trim(),
      ingredientes: ingredientes.trim(),
      instrucciones: instrucciones.trim(),
    };

    setRecetas([...recetas, nuevaReceta]);

   
    setNombre('');
    setIngredientes('');
    setInstrucciones('');

    alert('La receta ha sido agregada correctamente.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recetas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de la receta"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingredientes"
          multiline
          value={ingredientes}
          onChangeText={setIngredientes}
        />
        <TextInput
          style={styles.input}
          placeholder="Instrucciones"
          multiline
          value={instrucciones}
          onChangeText={setInstrucciones}
        />
      </View>
      <Button title="Agregar Receta" onPress={handleAgregarReceta} />
      
      
      {recetas.map((receta, index) => (
        <View key={index} style={styles.recetaContainer}>
          <Text style={styles.recetaNombre}>Nombre: {receta.nombre}</Text>
          <Text style={styles.recetaDetalle}>Ingredientes: {receta.ingredientes}</Text>
          <Text style={styles.recetaDetalle}>Instrucciones: {receta.instrucciones}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  recetaContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  recetaNombre: {
    fontWeight: 'bold',
  },
  recetaDetalle: {},
});