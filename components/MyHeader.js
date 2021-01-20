 import React,{Component}from 'react';
import { ImageBackground } from 'react-native';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

    import {Header,Icon} from 'react-native-elements'

    const MyHeader = ()=>{
        return(
            <Header
         centerComponent = {{text:"Your Money Saver", style:{color:"green"}}}
         backgroundColor="black"
         />
         
        )
    }