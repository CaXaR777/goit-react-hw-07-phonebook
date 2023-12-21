import * as s from './ContactList.styled';
// import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts';
import { selectVisibleContacts } from '../../redux/selectors';



export const ContactList = () => {

  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectVisibleContacts)
  return (
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
  );
};
