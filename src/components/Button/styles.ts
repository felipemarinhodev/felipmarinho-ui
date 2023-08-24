import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
         ${({ type }: ButtonProps) => css`
           display: flex;
           gap: 8px;
           align-items: center;
           background: ${type === 'primary' ? '#eb9b00' : '#FFF'};
           border: 2px solid #eb9b00;
           color: ${type === 'primary' ? '#FFF' : '#eb9b00'};
           padding: 16px 32px;
           font-size: 20px;
           border-radius: 8px;
           cursor: pointer;
           ${type! === 'primary'
             ? css`
                 &:hover {
                   background: #b87900;
                   border: 2px solid #b87900;
                 }
               `
             : css`
                 &:hover {
                   background: #fff;
                   border: 2px solid #b87900;
                   color: #b87900;
                 }
               `}
         `}
       `;
