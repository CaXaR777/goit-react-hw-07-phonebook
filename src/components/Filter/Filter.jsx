// import React from 'react';
import * as s from './Filter.styled';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <s.Label>
      Filter
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.target.value))}
      />
    </s.Label>
  );
};
