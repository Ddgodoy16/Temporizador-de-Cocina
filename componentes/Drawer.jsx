import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './pantallas/home'; 
import { Recetas } from './pantallas/MisRecetas';


const Drawer = createDrawerNavigator();

export function NavegacionGabetero() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Home} />
      <Drawer.Screen name="Recetas" component={Recetas} />
      
      
    </Drawer.Navigator>
  );
}