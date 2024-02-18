import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NavegacionGabetero } from './componentes/Drawer';
// import { Tabs } from './componentes/Tab';




export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <Tabs></Tabs> */}
       <NavegacionGabetero/> 
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 0,
    marginLeft: 12,
    marginRight: 12
  }
});