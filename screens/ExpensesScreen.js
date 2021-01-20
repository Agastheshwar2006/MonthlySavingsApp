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
        constructor(){
            super()
            this.state = {
                month:'',
                grocerys:0,
                salary:0,
                education:0,
                rent:0,
                waterbill:0,
                monthlyrecharges:0,
                clothes:0,
                birthday:0,
                newbuys:0,
                functions:0,
                balance:0,
            }
        }

    

        render(){
      return(
          <View>
           <TextInput
              style={styles.loginBox}
            
              placeholder="enter the month"
              onChangeText={(text)=>{
                this.setState({
                  month: text
                })
              }}
            />
              <TextInput
              style={styles.loginBox}
            
              placeholder="enter the salary"
              onChangeText={(text)=>{
                this.setState({
                  salary: text
                })
              }}
            />
             <TextInput
              style={styles.loginBox}
            
              placeholder="enter the grocerys"
              onChangeText={(text)=>{
                this.setState({
                  grocerys: text
                })
              }}
            />
              <TextInput
              style={styles.loginBox}
            
              placeholder="enter the education"
              onChangeText={(text)=>{
                this.setState({
                  education: text
                })
              }}
            />
             <TextInput
              style={styles.loginBox}
            
              placeholder="enter the rent"
              onChangeText={(text)=>{
                this.setState({
                  rent: text
                })
              }}
            />
             <TextInput
              style={styles.loginBox}
            
              placeholder="enter the monthlyrecharges"
              onChangeText={(text)=>{
                this.setState({
                  monthlyrecharges: text
                })
              }}
            />
            <TextInput
              style={styles.loginBox}
            
              placeholder="enter the clothes"
              onChangeText={(text)=>{
                this.setState({
                  clothes: text
                })
              }}
            />
            <TextInput
              style={styles.loginBox}
            
              placeholder="enter the bithday"
              onChangeText={(text)=>{
                this.setState({
                  birthday: text
                })
              }}
            />
            <TextInput
              style={styles.loginBox}
            
              placeholder="enter the newbuys"
              onChangeText={(text)=>{
                this.setState({
                  newbuys: text
                })
              }}
            />
            <TextInput
              style={styles.loginBox}
            
              placeholder="enter the functions"
              onChangeText={(text)=>{
                this.setState({
                  functions: text
                })
              }}
            />
           <TextInput
              style={styles.loginBox}
            
              placeholder="enter the balance"
              onChangeText={(text)=>{
                this.setState({
                 balance: text
                })
              }}
            />
           
          </View>
      )
       
        }
    }
    const styles = StyleSheet.create({
        container:{
         flex:1,
         backgroundColor:'green',
         alignItems: 'center',
         justifyContent: 'center'
       },
       profileContainer:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
       },
       title :{
         fontSize:65,
         fontWeight:'300',
         paddingBottom:30,
         color : 'yellow'
       },
       loginBox:{
         width: 300,
         height: 40,
         borderBottomWidth: 1.5,
         borderColor : 'blackssss',
         fontSize: 20,
         margin:10,
         paddingLeft:10
       },
       KeyboardAvoidingView:{
         flex:1,
         justifyContent:'center',
         alignItems:'center'
       },
       modalTitle :{
         justifyContent:'center',
         alignSelf:'center',
         fontSize:35,
         color:'black',
         margin:50
       },
       modalContainer:{
         flex:1,
         borderRadius:20,
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:"white",
         marginRight:30,
         marginLeft : 30,
         marginTop:80,
         marginBottom:80,
       },
       formTextInput:{
         width:"75%",
         height:35,
         alignSelf:'center',
         borderColor:'red',
         borderRadius:10,
         borderWidth:1,
         marginTop:20,
         padding:10
       },
       registerButton:{
         width:200,
         height:40,
         alignItems:'center',
         justifyContent:'center',
         borderWidth:1,
         borderRadius:10,
         marginTop:30
       },
       registerButtonText:{
         color:'red',
         fontSize:15,
         fontWeight:'bold'
       },
       cancelButton:{
         width:200,
         height:30,
         justifyContent:'center',
         alignItems:'center',
         marginTop:5,
       },
      
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
         padding: 10
       },
       buttonText:{
         color:'#fff',
         fontWeight:'200',
         fontSize:20
       }
      })