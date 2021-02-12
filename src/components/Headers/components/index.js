import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeHeaderWrapper = styled.View`
  flex: 1;
  padding-vertical: 10px;
  padding-horizontal: 10px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  height: ${hp('10%')};
  max-height: ${hp('10')};
`;
const Logo = styled.Image`
  height: 40px;
  width: ${wp('50%')};
`;
const IconWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export {HomeHeaderWrapper, Logo, IconWrapper};
