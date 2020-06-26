import styled from 'styled-components';

export const Container = styled.div`
  color: #df7a87;
  font-size: 20px;

  span + span{
    color: #000;
    background: linear-gradient(to bottom right, #fff, #9999);
    padding: 4px 10px;
    border-radius: 50%;
  }
`;

export const Wrapper = styled.span`
  background-color: ${props => props.picked ? '#000' : '#fff'};
  margin-right: 4px;
  color: ${props => props.picked ? '#000' : '#df7a87'};
`;
