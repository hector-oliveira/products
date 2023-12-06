import { theme } from '@themes/theme';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const ContentInput = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.light[800],
})`
  flex: 1;
  margin-left: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.light[800]};
  font-size: ${theme.sizes.default};
  color: ${ theme.colors.light[800] };

`;