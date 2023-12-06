import React from 'react';
import * as S from './Welcome.styled';
import { Input } from '@components/all-components';
import { theme } from '@themes/theme';

export const Welcome = () => {
  return (
    <S.Container>
      <S.Title>Welcome</S.Title>
      <S.ContainerInput>
        <Input.Text placeholder='Nome' />
        <Input.Password placeholder='Senha' autoCapitalize='none' />
      </S.ContainerInput>
    </S.Container>
  );
};