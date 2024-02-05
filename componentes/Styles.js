import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
backgroundColor: "#66CCFF",
    flex: 1,
   paddingTop: 50,
   paddingHorizontal: 55,
  },
  encabezadoBienvenido: {
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 5,
    
  },
  encabezadoTemporizador: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 0, 
  },

  TextBienvenido: {
    fontSize: 50,
    fontWeight: 'bold',
  },

  TextTemporizador: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  inputText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  inputContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  input: {
    height: 40,
    width: 60,
    margin: 10,
    borderWidth: 4,
    borderColor: "lightblue",
    paddingHorizontal: 10,
    marginBottom: 0,
    justifyContent: 'center',
  },

  
  centeredContainer: {
  margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  separator: {
    width: 30, 
    
  },

  button: {
    borderRadius: 50,
  },

  imagelogo: {
    margin: 20,
   
    alignItems: 'center',
    },

 
    
});