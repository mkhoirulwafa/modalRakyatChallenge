import React from 'react';
import {TouchableOpacity} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import styled from 'styled-components';
import {ButtonIcon} from '..';
import {Gap} from '../../utils';

export default function CardButton({text, onPress, iconName, iconColor, icon}) {
  const ButtonTextWrapper = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    align-self: center;
    justify-content: center;
  `;
  const Text = styled.Text`
    text-align: center;
    font-family: ${(props) => props.family || `'AkwePro-Regular'`};
    font-size: ${(props) => props.size || `16px`};
    color: ${(props) => props.color || `#000`};
  `;
  return (
    <ButtonTextWrapper onPress={onPress} activeOpacity={0.5}>
      <ButtonIcon
        Child={icon}
        iconName={iconName}
        iconColor={iconColor}
        iconSize={20}
        onPress={onPress}
      />
      <Gap width={5} />
      <Text color="#fff" size={14} family="AkwePro-DemiBold">
        {text}
      </Text>
    </ButtonTextWrapper>
  );
}
