import React from 'react';

import {
  View,
  StyleSheet,Text, Button, Image
} from 'react-native';

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
    backgroundColor: 'orange',
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
    width: 60,
    height: 40,
    resizeMode: 'stretch',
  },

});

export default ({ onPress }) => (
  <View style={styles.container}>

    <View style={styles.leftPane}>
      <Image
        style={styles.stretch}
        source={require('../assets/chantier.png')}
      />
      <ThinRedLine onPress={onPress} />
      <Text style={{color: 'white'}}>Chantier Paris</Text>
    </View>

    <View style={styles.rightPane}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text width={160}>Date de commencement</Text>
        <Text width={160} style={{color: '#989898' }}>15/10/2020</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
        <Text width={160}>Date de fin prévu</Text>
        <Text width={160} style={{color: '#989898' }}>15/10/2022</Text>
        </View>

        <View style={{ flex: 1 }}>
        <Text width={160}>Localistation</Text>
        <Text width={160} style={{color: '#989898' }}>Paris</Text>
        </View>
      </View>
    </View>

  </View>
);
