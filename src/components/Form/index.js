import React from 'react';

import { Container } from './styles';

function Form({ data, onLimitChange, onShuffle }) {
  const { limit, isCalculating } = data;

  const handleInputChange = (event) => {
    const inputText = Number(event.target.value);
    onLimitChange(inputText);
  }

  return (
    <Container>
        <label htmlFor="inputLimit">Quantidade de sorteios:</label>

        <input 
          type="number" 
          min="1"
          max="100"
          step="1"
          id="inputLimit" 
          value={limit} 
          onChange={handleInputChange}
          disabled={isCalculating}
        />

      <button onClick={onShuffle} disabled={isCalculating}>Sortear</button>
    </Container>
  );
}

export default Form;