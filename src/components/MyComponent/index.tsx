import { FC } from 'react';
import * as S from './style';

interface IMyComponent {};

export const MyComponent:FC<IMyComponent> = () => {
  return (
    <S.Container>
      <h1>MyComponent</h1>
    </S.Container>
  )
}