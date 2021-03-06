import styled from 'styled-components/native';
import {hpx, wpx} from '~/Utils/styles';
import {Animated} from 'react-native';

export const RoundConteiner = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const RoundTitle = styled.Text`
  color: #fff;
  font-size: ${(props) =>
    props.small ? props.theme.fonts.large : props.theme.fonts.xxlarge};
  margin-bottom: ${hpx(20)};
  font-family: ${(props) => props.theme.fontName.bold};
`;
