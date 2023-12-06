import { theme } from '@themes/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  font-size: ${ theme.sizes.lg };
  color: ${ theme.colors.light[900] };
  text-align: center;
`;

export const ContainerInput = styled.SafeAreaView`
  width: 80%;
  align-self: center;
`;