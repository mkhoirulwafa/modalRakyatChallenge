import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

const Text = styled.Text`
  text-align: ${(props) => props.align || `center`};
  font-family: ${(props) => props.family || `'AkwePro-Regular'`};
  font-size: ${(props) => props.size || `16px`};
  color: ${(props) => props.color || `#000`};
`;
const Balance = styled.Text`
  text-align: center;
  font-family: 'AkwePro-DemiBold';
  font-size: 30px;
  color: #1b78e2;
`;
const Description = ({title, subtitle, prefixSub, marginV}) => {
  return (
    <View>
      <Text color="#c2c2c2" size={13} align="left" family="AkwePro-Regular">
        {title}
      </Text>
      <Text color="#48515A" size={15} align="left" family="AkwePro-DemiBold">
        {subtitle}
        <Text color="#48515A" size={15} align="left" family="AkwePro-DemiBold">
          {prefixSub}
        </Text>
      </Text>
    </View>
  );
};

export {Text, Balance, Description};
