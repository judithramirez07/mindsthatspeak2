import React from "react";
import { Text, Image,View} from 'react-native';

const Tip1 = () =>{
    return(
        <View>
            <Text>TIP 1 Hello</Text>
            <Image style={{height:280,width:320}} source={require('../assets/images/gifPrueba.gif')}/>
        </View>
    );
}
export default Tip1;