import React, { Component } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const theme = () =>{
    return  useTheme;
}
const colors = () =>{
    return  useTheme;
} 

class PointingScreen extends Component {

 
  render() {
    
    return (
    <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text}}>Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });

export default PointingScreen;
