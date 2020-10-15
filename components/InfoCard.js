import React from 'react';

import {
  View,
  StyleSheet,Text, Button, Image
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#90CAF9',
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightPane: {
    flex: 2,
    padding: 16,
    backgroundColor: '#fff',
  },
  stretch: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },

});

export default ({ onPress }) => (
  <View style={styles.container}>

    <View style={styles.leftPane}>
      <Image
        style={styles.stretch}
        source={require('../assets/check.svg')}
      />
      <Text style={{color: 'white'}}>Jeudi 15 Octobre 2020</Text>
    </View>

    <View style={styles.rightPane}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text width={160}>Heure arrivée</Text>
        <Text width={160} style={{color: '#989898' }}>9h10</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
        <Text width={160}>Heure départ</Text>
        <Text width={160} style={{color: '#989898' }}>17h09</Text>
        </View>

        <View style={{ flex: 1 }}>
        <Text width={160}>Position</Text>
        <Text width={160} style={{color: '#989898' }}>15,19</Text>
        </View>
      </View>
    </View>

  </View>
);
