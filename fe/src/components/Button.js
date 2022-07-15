import styled, { css } from 'styled-components';

export default styled.button`
  height: 52px;
  padding: 0 16px;

  border: 0;
  border-radius: 4px;

  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  font-size: 16px;
  font-weight: bold;
  color: #FFF;

  transition: all .2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
    transition: all .2s ease-in;
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
    transition: all .2s ease-in;
  }

  &:disabled {
    background: #CCC;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}

`;
