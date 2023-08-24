import React from 'react';
import * as S from './styles';
export interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'secondary';
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const Button = ({ children, onClick, type = 'primary' }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} type={type}>
      {children && children}
    </S.Button>
  )
}
