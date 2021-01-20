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
    import MyHeader from '../components/MyHeader'
     
export default class HomeScreen extends Component{
    render(){
  return(
      <View>
          
        <Text>
            IncomeScreen
        </Text>
        <TouchableOpacity style = {styles.button} onPress={()=>{
          this.props.navigation.navigate('ExpensesScreen')
        }}>
           <Text style = {styles.buttonText}>
           Expenses  
           </Text> 
        
        </TouchableOpacity>
       
        <TouchableOpacity style = {styles.button} onPress={()=>{
          this.props.navigation.navigate('IncomeScreen')
        }}>
           <Text style = {styles.buttonText}>
           Savings
           </Text> 
           </TouchableOpacity>
      
       
      </View>
  )
   
    }


}
const styles = StyleSheet.create({
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"brown",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10,
        alignSelf:'center',
        margin:150
      },

      buttonText:{
        color:'#fff',
        fontWeight:'200',
        fontSize:20
      }



})