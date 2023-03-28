import React from 'react'
import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    incomingMsgBox:{
        backgroundColor:'white',
        maxHeight:'70%',
        borderRadius:10,
        padding:5,
        alignSelf:'flex-start',
        marginVertical: 5,
        marginHorizontal: 5,
        borderWidth:0.5,
        borderColor:'grey',
    },
    incomingMsgText:{
        color:'black',
        fontSize:16
    },
    sentMsgBox:{
        backgroundColor:'green',
        maxHeight:'70%',
        borderRadius:10,
        padding:5,
        alignSelf:'flex-end',
        marginVertical: 5,
        marginHorizontal: 5,
    },
    sentMsgText:{
        color:'white',
        fontSize:16
    },


})
export default styles;