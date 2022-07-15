import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 52px;

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

`;
