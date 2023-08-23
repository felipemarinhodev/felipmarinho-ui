import React from 'react';
import * as S from './styled';

export interface ButtonProps {
  text?: string;
  type?: 'primary' | 'secondary'
  onClick?: () => void
}

export const Button = ({ text, onClick, type = 'primary' }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} type={type}>{text}</S.Button>
  )
}
