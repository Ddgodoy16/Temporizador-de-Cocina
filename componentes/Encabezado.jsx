import { Text, View } from 'react-native';
import { styles } from './Styles';

export const Encabezado = () => {
  return (
    <View style={styles.encabezadoBienvenido}>
      <Text style={styles.TextBienvenido}>Bienvenid@</Text>
    </View>
  );
};

export const Encabezado2 = () => {
  return (
    <View style={styles.encabezadoTemporizador}>
      <Text style={styles.TextTemporizador}>CHEF</Text>
    </View>
  );
};