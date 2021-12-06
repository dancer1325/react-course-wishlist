import React from 'react';
import PropTypes from 'prop-types'; /** Requried new dependency to add */
import WishItem from './WishItem';

/* This component is the parent of WishTem */
/* onWishesChange Event triggered each time wishes change */
const WishList = ({ wishes, onWishesChange }) => (
  <ul className="wish-list">
    {wishes.map(({ text, done }, i) => (
      <WishItem
        text={text}
        done={done}
        onDoneChange={(value) => {
          const updatedWishes = [...wishes];
          updatedWishes[i].done = value;
          onWishesChange(updatedWishes);
        }}
        id={`wish${i}`}
        key={text}
      />
    ))}
  </ul>
); /* onDoneChange added in order to capture the event triggered by the child WishItem */

/** Indicate prop's type */
WishList.propTypes = {
  /* wishes: PropTypes.array,  It's wrong for the eslint configuration,
  in which it requests us the type of array */
  wishes: PropTypes.arrayOf(PropTypes.shape(WishItem.propTypes)),
  onWishesChange: PropTypes.func,
};
/** Default value of the props */
WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => {},
};

export default WishList;
