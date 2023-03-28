import React,{useState,Component} from "react";
import { Text, Image,View,TouchableOpacity,SafeAreaView} from 'react-native';
import ChatBot from '../../ChatBot';

const Chat = () =>{
    return(
        <SafeAreaView>
            <ChatBot />
        </SafeAreaView>

    );
}
export default Chat;