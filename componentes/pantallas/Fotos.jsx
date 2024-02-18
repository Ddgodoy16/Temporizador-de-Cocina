import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

export const Camara = ({ onFotoTomada }) => {
  const [tipoCamara, setTipoCamara] = useState(CameraType.back);
  const [permiso, solicitarPermiso] = Camera.useCameraPermissions();

  const capturarFoto = async () => {
    if (!permiso.granted) {
      alert('No se ha concedido permiso para usar la cámara.');
      return;
    }
    const foto = await cameraRef.current.takePictureAsync();
    onFotoTomada(foto); 
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={tipoCamara} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Button title="Capturar" onPress={capturarFoto} />
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
});