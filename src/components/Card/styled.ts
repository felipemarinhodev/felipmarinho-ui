import { styled } from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #808080;
  padding: 32px;

  @media (max-width: 1024px) {
    padding: 24px;
  }
  @media (max-width: 428px) {
    padding: 16px;
  }
`;
