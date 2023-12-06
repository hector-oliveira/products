import React from 'react';
import * as S from './Text.styled';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { theme } from '@themes/theme';
import { InputProps } from '@interfaces/InputProps';

export const Text = ({ placeholder, ...rest }: InputProps) => {
  return (
    <S.Container {...rest}>
      <FontAwesome name='user' size={28} color={ theme.colors.light[800] }/>
      <S.ContentInput placeholder={placeholder} />     
    </S.Container>
  );
};