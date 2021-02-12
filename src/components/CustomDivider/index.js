import styled from 'styled-components';

const CustomDivider = styled.View`
  width: ${(props) => props.width || `1px`};
  height: ${(props) => props.height || `50px`};
  background-color: ${(props) => props.color || `#2068bb`};
  align-self: ${(props) => props.center || `center`};
`;
export {CustomDivider};
