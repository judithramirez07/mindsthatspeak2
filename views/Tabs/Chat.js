import React,{useState,Component} from "react";
import { Text, Image,View,TouchableOpacity,SafeAreaView} from 'react-native';
import ChatBot from '../../ChatBot';
import{ WebView } from 'react-native-webview';

const Chat = () =>{
    return(
        <WebView source={{ uri: 'https://console.dialogflow.com/api-client/demo/embedded/a58ad3dd-e14d-4cb6-864c-1ca6de60260c'  }} />
    );
}
export default Chat;