import React, { useState } from 'react';
import PropTypes from 'prop-types';

const createWish = text => ({ done: false, text });

/* onNewWish Prop which is the callback invoked when the wish is created */
const WishInput = ({ defaultValue, onNewWish }) => {
  const [newWishText, setNewWishText] = useState(defaultValue);
  /* newWishText value to store the state's content */
  /* setNewWishText function to modify the state */
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input
        className="wish-input__field"
        value={newWishText}
        onChange={e => setNewWishText(e.target.value)
        } /* e.target.value to access to the input's value */
        onKeyUp={(e) => {
          if (e.key === 'Enter' && newWishText.length) {
            onNewWish(createWish(newWishText));
            setNewWishText(defaultValue); /* Clean input content */
          }
        }}
        placeholder="Enter your wish here"
      />
    </fieldset>
  );
};

WishInput.propTypes = {
  defaultValue: PropTypes.string,
  onNewWish: PropTypes.func /* It's a function */,
};
WishInput.defaultProps = {
  defaultValue: '',
  onNewWish: () => {} /* Empty function */,
};
export default WishInput; /* Necessary to be able to access to the component outside */
