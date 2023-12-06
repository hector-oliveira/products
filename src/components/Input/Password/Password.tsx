import React, { useState } from 'react';
import * as S from './Password.styled';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { theme } from '@themes/theme';
import { InputProps } from '@interfaces/InputProps';
import useToggle from '@hooks/useToggle';

export const Password = ({ placeholder, secureTextEntry, ...rest }: InputProps) => {
  
  const { value, toggle } = useToggle(!secureTextEntry);
  
  return(
    <S.Container>
      <FontAwesome name='lock' size={28} color={ theme.colors.light[800] }/>
      <S.ContentInput
        {...rest}
        placeholder={placeholder}
        secureTextEntry={value}
      />
      <S.Icon
        name={value ? 'eye' : 'eye-slash'}
        size={28}
        color={ theme.colors.light[800] }
        onPress={toggle}

      />
    </S.Container>
  );
};