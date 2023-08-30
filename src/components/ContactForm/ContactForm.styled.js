import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';


export const Title = styled.h1`
font-size: 48px;
margin: 30px`;



export const StyledForm = styled(Form)`
  width: 600px;
  border-radius: 6px;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin:30px;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 8px;
font-size: 22px;
`;

export const StyledField = styled(Field)`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid black;
`;

export const StyledButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
font-size: 22px`
;


