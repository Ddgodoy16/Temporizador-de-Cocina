import {View, Image} from 'react-native';
import { styles } from './Styles';


export const  Logo = () => {
    return (
<View style={styles.imagelogo}>
<Image style = {{width: 150, height: 150}}
    source ={{uri: "https://i.pinimg.com/originals/95/f3/4e/95f34e9bc588226a8c91a1be5bbebd67.png"}}>
    
</Image>

    </View>
    )
    
}