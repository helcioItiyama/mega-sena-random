import React from 'react';
import Number from '../Number';

import { Container } from './styles';

function Numbers({numbers, pickedNumbers}) {
  return (
    <Container>
      {numbers.map(number => {
        const isPickedNumber = pickedNumbers.some(item => item === number.value);
        return (
          <div key={number.id}><Number number={number} picked={isPickedNumber}/></div>
        )}
      )}
    </Container>
  );
}

export default Numbers;