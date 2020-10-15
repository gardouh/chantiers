import React, { Component } from 'react';
import { View, Text, Button,ScrollView, StyleSheet, StatusBar } from 'react-native';
import Row from './Row';
import { FloatingAction } from "react-native-floating-action";
import {TouchableOpacity } from 'react-native'
import { Root, Popup } from 'popup-ui'

const actions = [
  {
    text: "Arrivée",
    icon: require("../assets/ic_accessibility_white.png"),
    name: "bt_accessibility",
    position: 2
  },
  {
    text: "Départ",
    icon: require("../assets/ic_language_white.png"),
    name: "bt_language",
    position: 1
  }
];

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
            const styles = StyleSheet.create({
            container: {
                flex: 1,
            },
            scrollView: {
                backgroundColor: '#F5F5F5',
                flex: 1,
                padding: 10,
                paddingTop: STATUSBAR_HEIGHT,
            },
            });

            
export default class PointingScreen extends Component {
        

        constructor(props) {
            super(props);
            
        }
      
        render() {
          return (
            
            <View style={styles.container}>
              <Root>
                <StatusBar
                barStyle="light-content"
                />
                
                <ScrollView
                style={styles.scrollView}
                >
                    <Row zIndex={100} />
                    <Row zIndex={90} />
                    <Row zIndex={80} />
                    <Row zIndex={70} />
                    <Row zIndex={60} />
                    <Row zIndex={50} />
                    <Row zIndex={40} />
                    <Row zIndex={30} />
                </ScrollView>
                
                <FloatingAction
                    actions={actions}
                    onPressItem={name => {
                      Popup.show({
                        type: 'Success',
                        title: 'Pointage pris en compte',
                        button: true,
                        textBody: 'Vous avez pointé à 11h15',
                        buttonText: 'Ok',
                        callback: () => Popup.hide()
                      })
                    }}
                />
              </Root>
            </View>
          );
        }
      }