import * as s from './ContactList.styled';
// import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

import { selectIsLoading, selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';



export const ContactList = () => {

const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <div>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
    <s.List>
      {filteredContacts.map(({id, name, number}) => (
        <s.ListItems key={id}>
          <s.Name>{name}:</s.Name>
          <s.Number>{number}</s.Number>
          <s.Button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </s.Button>
        </s.ListItems>
      ))}
    </s.List>
    )}
    </div>
  );
};
