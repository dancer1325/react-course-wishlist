import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/* onDoneChange event to inform to the parent that the ste has changed */
const WishItem = ({
  done, text, id, onDoneChange,
}) => {
  const [age, setAge] = useState(0);

  // It depends on the done variable --> It's indicated as second argument
  useEffect(() => {
    let ageInterval;
    if (done) {
      setAge(0);
    } else {
      // Invoke setInternal js function each 1000 ms
      ageInterval = setInterval(() => {
        if (done) {
          clearInterval(ageInterval);
        } else {
          setAge(a => a + 1);
        }
      }, 1000);
    }
    // Optional function to return, to be invoked when the component is destroyed
    return () => clearInterval(ageInterval);
  }, [done]);

  return (
    <li
      className={classNames('wish-list__item', {
        'wish-list__item--done': done,
        'wish-list__item--warning': age >= 5 && age < 10,
        'wish-list__item--danger': age >= 10,
      })}
    >
      <input
        id={id}
        type="checkbox"
        checked={!!done}
        onChange={e => onDoneChange(e.target.checked)}
      />
      <label htmlFor={id}>{text}</label>
    </li>
  ); /* onChange js event triggered each time checkbox change */
  /* onDoneChange event to inform to the parent that the ste has changed */
};
WishItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
  onDoneChange: PropTypes.func,
};
WishItem.defaultProps = {
  done: false,
  text: '',
  id: '',
  onDoneChange: () => {} /* As default, nothing will happen */,
};
export default WishItem;
