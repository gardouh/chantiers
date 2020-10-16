import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import {
  ThinGrayLine,
  ThickWhiteLine,
} from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFF4EB',
    justifyContent: 'flex-end',
  },
});

export default ({ onPress }) => (
  <View style={styles.container}>

    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#FFB77B',
        height: 40,
        padding: 10,
      }}
    >
      <Text>Hello word</Text> 
    </View>

    <View style={styles.card}>
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
