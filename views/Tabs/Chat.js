import React,{useState,Component} from "react";
import { Text, Image,View,TouchableOpacity,SafeAreaView} from 'react-native';
import ChatBot from '../../ChatBot';
import{ WebView } from 'react-native-webview';

const Chat = () =>{
    return(
        <WebView source={{ uri: 'https://widget.kommunicate.io/chat?appId=18898cc6625c7e609fd87f9d582823fe6'  }} />
    );
}
export default Chat;