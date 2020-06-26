import React, { useState, useEffect, useRef } from 'react';
import Form from '../components/Form';
import Numbers from '../components/Numbers';
import PickedNumbers from '../components/PickedNumbers';
import Header from '../components/Header';
import { Container } from './styles';

function getEmptyArray() {
   const array = Array.from({length: 60}).map((_, index) => {
     const id = index + 1;
     
     const description = id.toString().padStart(2, '0');
     
     return {
       id,
       description,
       value: id,
       count: 0,
     };
    })
    return array;
}

function generateNumber(from = 1, to = 60) {
  return Math.max(Math.ceil(Math.random() * to), from);
}

function App() {
  const [numbers, setNumbers] = useState(getEmptyArray());
  const [pickedNumbers, setPickedNumbers] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [limit, setLimit] = useState(1);

  const canRun = useRef(false);

  useEffect(() => {
    if(!canRun.current) {
      return;
    }
    const interval = setInterval(() => {
      if(pickedNumbers.length === 6) {
        setIsCalculating(false);
        return;
      }

      const newNumber = generateNumber();
      const newNumbers = [...numbers];
      const newPickedNumbers = [...pickedNumbers];

      const item = newNumbers.find(item => item.value === newNumber);
      item.count++;

      if(item.count === limit) {
        newPickedNumbers.push(item.value)
      } 

      setNumbers(newNumbers);
      setPickedNumbers(newPickedNumbers);
      
    }, 4);

    return () => clearInterval(interval);
  }, [isCalculating, limit, numbers, pickedNumbers]);

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
  }

  const handleShuffleClick = () => {
    setNumbers(getEmptyArray());
    setPickedNumbers([]);
    setIsCalculating(true);
    canRun.current = true;
  }

  return (
    <Container>
      <Header/>

      <Form 
        data={{limit, isCalculating}} 
        onLimitChange={handleLimitChange}
        onShuffle={handleShuffleClick}
      />

      <Numbers numbers={numbers} pickedNumbers={pickedNumbers}/>
      
      <PickedNumbers pickedNumbers={pickedNumbers}/>
    </Container>
  );
}

export default App;
