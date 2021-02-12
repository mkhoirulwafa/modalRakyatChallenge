import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function ButtonIcon({
  onPress,
  Child,
  iconName,
  iconSize,
  iconColor,
}) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <Child name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}

ButtonIcon.defaultProps = {
  iconSize: 30,
  iconColor: '#1B78E2',
};
