import * as s from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import { selectContacts } from '../../redux/selectors';

const NameInputSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').required('Name is required'),
  number: Yup.string()
    .matches(/^\+[1-9]\d{1,14}$/, 'Invalid phone number format')
    .required('Must be filled'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    addNewContact(values);
    actions.resetForm();
  };

  const addNewContact = newContact => {
    const hasContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasContact) {
      alert('A contact with that name already exists');
      return;
    }
    dispatch(addContact(newContact));
  };


  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={NameInputSchema}
      onSubmit={handleSubmit}
    >
      <s.StyledForm>
        <label>
          Name
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" />
        </label>

        <label>
          Number
          <Field type="tel" name="number" placeholder="Number" />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contact</button>
      </s.StyledForm>
    </Formik>
  );
};
