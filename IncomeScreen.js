import React,{Component}from 'react';
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
     
export default class IncomeScreen extends Component{
    render(){
  return(
      <View>
        <Text>
            Name:
        </Text>
        <Text>
            Salary:
        </Text>
        <Text>
            Money saved before month
        </Text>
        <Text>
            Money saved before year this month 
        </Text>
       
      </View>
  )
   
    }
}
    