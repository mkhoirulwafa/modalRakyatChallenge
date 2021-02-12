import React from 'react';
import {View, Text} from 'react-native';

export default function Portofolio() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF1744',
      }}>
      <Text
        style={{
          color: '#B6B6B6',
          textAlign: 'center',
          fontSize: 13,
        }}>
        {' '}
        This is Portofolio Screen !{' '}
      </Text>
    </View>
  );
}
