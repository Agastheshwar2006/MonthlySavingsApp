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
    export default class SavingsScreen extends Component{
        render(){
      return(
          <View>
            <Text>
                Month:
            </Text>
            <Text>
                Salary:
            </Text>
            <Text>
                grocery:
            </Text>
            <Text>
               Education
            </Text>
            <Text>
              rent
            </Text>
           <Text>
               waterbill
           </Text>
           <Text>
               Monthlyrecharges
           </Text>
           <Text>
               clothes
           </Text>
           <Text>
               bithdays
           </Text>
           <Text>
               Newbuys
           </Text>
           <Text>
               Functions
           </Text>
           <Text>
               Balance
           </Text>
          </View>
      )
       
        }
    }