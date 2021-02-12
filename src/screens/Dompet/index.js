import React from 'react';
import {View, Text} from 'react-native';

export default function Dompet() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#33691E',
      }}>
      <Text
        style={{
          color: '#B6B6B6',
          textAlign: 'center',
          fontSize: 13,
        }}>
        {' '}
        This is Dompet Screen !{' '}
      </Text>
    </View>
  );
}
