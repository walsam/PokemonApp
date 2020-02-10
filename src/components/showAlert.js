import React from 'react'
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native'

const AlertExample = () => {
   const showAlert = () =>{
      Alert.alert(
        "Alert Title",
        "coming soon",
      )
   }
   const { buttonStyle, textStyle } = styles;
   return (
      <TouchableOpacity onPress = {showAlert} style = {buttonStyle}>
         <Text style={textStyle}>More Info</Text>
      </TouchableOpacity>
   )
}
export default AlertExample

const styles = StyleSheet.create ({
    textStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    },
     buttonStyle: {
       flex:1,
       alignSelf: 'stretch',
       backgroundColor: '#fff',
       borderRadius: 5,
       borderWidth: 1,
       borderColor: '#007aff',
       marginLeft: 5,
       marginRight: 5,
     }

})
