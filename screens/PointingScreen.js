import React, { Component } from 'react';
import { View, Text, Button,ScrollView, StyleSheet, StatusBar } from 'react-native';
import Row from './Row';


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
                </ScrollView>
            </View>
          );
        }
      }