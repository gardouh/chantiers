import React from 'react';

import {
  View,
  TouchableHighlight,
  Text
} from 'react-native';

const Line = ({ style, onPress }) => {
  if (onPress) {
    return (
      <TouchableHighlight
        onPress={onPress}
      >
        <View style={[
          {
            width: 50,
            height: 50,
            backgroundColor: 'red'
          }
        ]}>
          <Text>Détails</Text>
        </View>
      </TouchableHighlight>
    );
  }

  return (
    <View
      style={[
        {
          marginBottom: 10,
        },
        style,
      ]}
    />
  );
};

const ThinLine = ({ color, width = 60, ...props }) => (
  <Line
    style={{
      width,
      backgroundColor: color,
      height: 10,
    }}
    {...props}
  />
);

const ThickLine = ({ color, width = 70, ...props }) => (
  <Line
    style={{
      width,
      backgroundColor: color,
      height: 20,
    }}
    {...props}
  />
);

export const ThinGrayLine = (props) => (
  <ThinLine color={'red'} {...props} />
);

export const ThickGrayLine = (props) => (
  <ThickLine color={'black'} {...props} />
);

export const ThickWhiteLine = (props) => (
  <ThickLine color={'blue'} {...props} />
);

export const ThickDarkGrayLine = (props) => (
  <ThickLine color={'green'} {...props} />
);

export const ThinRedLine = (props) => (
  <ThinLine color={'grey'} {...props} />
);
