import React, { useState } from 'react';
import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';

const initialWishes = [
  { done: false, text: 'Travel to the moon' },
  { done: true, text: 'Make an intro course to React' },
  { done: true, text: 'Pay the gym' },
  { done: false, text: 'Go to the gym' },
];

const App = () => {
  const [wishes, setWishes] = useState(
    initialWishes,
  ); /* State to represent all the wishes */
  /* setWishes with all the existing ones and the new one */
  return (
    <div className="app">
      <h1>My wishlist</h1>
      <WishInput onNewWish={wish => setWishes([...wishes, wish])} />
      <WishList wishes={wishes} onWishesChange={setWishes} />
      {/* It could be indicated as function also */}
      {/* <WishList wishes={wishes} onWishesChange={ wishes => setWishes(wishes)} /> */}
      <button
        type="button"
        className="wish-clear"
        onClick={() => setWishes(wishes.filter(wish => !wish.done))}
      >
        Archive done
      </button>
    </div>
  );
};

export default App;
