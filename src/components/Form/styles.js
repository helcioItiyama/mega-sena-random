import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #01ac5d;
  margin: 0 auto;
  width: 870px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #fff;
  padding: 20px;
  margin-top: 40px;

  input {
    width: 400px;
    height: 28px;
    padding-left: 200px;
    font-weight: bold;
  }
  
  button {
    background: #01ac5d;
    padding: 4px 16px;
    border-radius: 4px;
    color: #fff;
    border: none;
    font-weight: bold;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#01ac5d')};
    }
  }
`;
