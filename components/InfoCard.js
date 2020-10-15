import React from 'react';

import {
  View,
  StyleSheet,Text, Button, Image
} from 'react-native';
import { color } from 'react-native-reanimated';

import {
  ThinGrayLine,
  ThickGrayLine,
  ThickDarkGrayLine,
  ThinRedLine,
} from './Lines';

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
      <Text>InfoCard</Text>
      <View>
        <ThinRedLine onPress={onPress} >
          <Text style={{color: 'white'}}>Détails</Text>
        </ThinRedLine>
      </View>
    </View>

    <View style={styles.rightPane}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text width={160} >rightPane</Text>
        <Text width={160} >rightPane</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text width={160} >rightPane</Text>
          <Text width={160} >rightPane</Text>
        </View>

        <View style={{ flex: 1 }}>
           <Text width={160} >rightPane</Text>
          <Text width={160} >rightPane</Text>
        </View>
      </View>
    </View>

  </View>
);
