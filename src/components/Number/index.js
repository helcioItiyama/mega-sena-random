import React from 'react';

import { Container, Wrapper } from './styles';

function Number({number, picked}) {
  const {description, count} = number;

  return(
    <Container >
      <Wrapper picked={picked}>[ {description} ]</Wrapper>
      <span>{count}</span>
    </Container>
  )
}

export default Number;