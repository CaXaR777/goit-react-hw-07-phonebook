import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  outline: 1px solid grey;
  border-radius: 20px;
  padding: 10px;
  background-color: yellow;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  input {
    margin-top: 6px;
    border-radius: 4px;
  }
  button {
    width: 100px;
    cursor: pointer;
    background-color: greenyellow;
    border-radius: 5px;
    border: none;
    &:hover {
      background-color: blueviolet;
      color: #fff;
      transform: scale(1.1);
    }
  }
`;

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  input {
    width: 200px;
    padding: 2px;
    margin-top: 6px;
    border: 1px solid rgb(219, 216, 216);
    border-radius: 2px;
    &:focus {
      border-color: rgb(99, 149, 241, 0.6);
      outline: 2px rgba(99, 149, 241, 0.6);
      outline-style: solid;
    }
  }
`;
