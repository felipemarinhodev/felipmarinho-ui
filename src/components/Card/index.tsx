import React from 'react';
import * as S from './styled';

export type CardProps = {
  children: React.ReactNode;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export const Card = ({ children, ...rest }: CardProps) => {
  return (
    <S.Wrapper {...rest}>{children}</S.Wrapper>
  )
}