import React from 'react';
import { View,Text} from 'react-native';
import Msg from './msg';

const ChatBot = () =>{
    return(
        <View>
            <Msg incomingMsg={true} msg="entrante"/>
            <Msg sentMsg={true} msg="enviado"/>
        </View>
    );
}
export default ChatBot;