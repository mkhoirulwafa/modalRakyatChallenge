import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from '..';
import {Gap} from '../../utils';

export function Header({title, onPressBack}) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        paddingVertical: 10,
        width: widthPercentageToDP('100'),
        flexDirection: 'row',
        elevation: 4,
      }}>
      <Gap width={10} />
      <TouchableOpacity activeOpacity={0.8} onPress={onPressBack}>
        <Ionicons name="arrow-back" color="#1b78e2" size={30} />
      </TouchableOpacity>
      <Gap width={20} />
      <Text color="#1b78e2" family="AkwePro-DemiBold" align="center">
        {title}
      </Text>
    </View>
  );
}
