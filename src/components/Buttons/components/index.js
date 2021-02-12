import {widthPercentageToDP} from 'react-native-responsive-screen';
import styled from 'styled-components';

export const ButtonPrimary = styled.TouchableOpacity`
  align-self: center;
  justify-content: center;
  background-color: #1b78e2;
  border-radius: 10px;
  width: ${widthPercentageToDP('80')};
  height: 50px;
`;
