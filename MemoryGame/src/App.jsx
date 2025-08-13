import React, { useState, useEffect } from 'react';
import './App.css';

const initialSymbols = ['🐶', '🐱', '🐭', '🦊', '🐻', '🐸', '🦁', '🐼'];

const shuffleCards = () => {
  const cards = [...initialSymbols, ...initialSymbols];
  return cards
    .sort(() => Math.random() - 0.5)
    .map((symbol, index) => {
      return {
        id: index,
        symbol,
        isFlipped: false,
        isMatched: false,
      };
    });
};

const App = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);

  console.log(cards);

  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  const handleCardClick = (index) => {
    if (
      cards[index].isFlipped ||
      cards[index].isMatched ||
      flipped.length === 2
    ) {
      return;
    }

    console.log('test');

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    const newFlipped = [...flipped, index];
    setCards(newCards);
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIndex, secondIndex] = newFlipped;
      let isMatch =
        newCards[firstIndex].symbol === newCards[secondIndex].symbol;

      setTimeout(() => {
        const updatedCards = [...newCards];
        if (isMatch) {
          updatedCards[firstIndex].isMatched = true;
          updatedCards[secondIndex].isMatched = true;
        } else {
          updatedCards[firstIndex].isFlipped = false;
          updatedCards[secondIndex].isFlipped = false;
        }
        setCards(updatedCards);
        setFlipped([]);
      }, 500);
    }
  };

  const handleReset = () => {
    setCards(shuffleCards());
    setFlipped([]);
  };

  return (
    <div className='main-container'>
      <div className='cards-container'>
        {cards.map((ele) => {
          return (
            <div
              key={ele.id}
              className='card'
              onClick={() => handleCardClick(ele.id)}
              style={{
                backgroundColor:
                  ele.isFlipped || ele.isMatched ? 'white' : 'silver',
              }}
            >
              {ele.isFlipped || ele.isMatched ? ele.symbol : '❓'}
            </div>
          );
        })}
      </div>
      <button className='reset-btn' onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default App;
