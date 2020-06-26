import React from 'react';

import { Container } from './styles';

function PickedNumbers({pickedNumbers}) {
  pickedNumbers.sort((a, b) => a - b);
  return (
    <Container>
      <p>
        <strong>Números sorteados: </strong>
        {pickedNumbers.map(number => {
          const showNumber = number.toString().padStart(2, '0');
          return (
          <span>{showNumber}</span>
        )})}
      </p>
    </Container>
  );
}

export default PickedNumbers;