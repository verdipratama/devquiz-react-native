import React from 'react';
import { TouchableOpacity} from 'react-native';

import {Container, Text} from './styles';

export default function CustomButton({children, onPress, containerStyle}) {
  return (
    <Container style={containerStyle}>
      <TouchableOpacity onPress={onPress}>
        <Text>{children}</Text>
      </TouchableOpacity>
    </Container>
  );
}
