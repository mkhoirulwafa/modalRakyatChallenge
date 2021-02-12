import React from 'react';
import {View, Text} from 'react-native';

export default function Lainnya() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF6F00',
      }}>
      <Text
        style={{
          color: '#B6B6B6',
          textAlign: 'center',
          fontSize: 13,
        }}>
        {' '}
        This is Lainnya Screen !{' '}
      </Text>
    </View>
  );
}
