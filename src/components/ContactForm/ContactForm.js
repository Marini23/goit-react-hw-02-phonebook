import React, { Component } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form } from "formik";
import {
    StyledForm,
    Label,
    StyledField,
    StyledButton,
    Title
} from './ContactForm.styled';




 const SignupSchema = Yup.object().shape({
   name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
   number: Yup.string()
    .min(9, 'Too Short!')
    .max(11, 'Too Long!')
    .required('Required'),
 });






export const ContactForm = () => {
    return (
        <div className="App">
        <Title>Phonebook</Title>
    <Formik
            initialValues={{ name: "", number: "" }}
            validationSchema={SignupSchema}
        onSubmit= {values => {
            console.log(values);
        }}
        >
            <StyledForm>
            <Label htmlFor='name'>
                    Name
            <StyledField type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required />
            </Label>
            <Label htmlFor='number'>
                        Number
            <StyledField type="tel"
                name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required />
            </Label>
            <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
    </Formik>
    </div>
    );
 };




// export class ContactForm extends Component {
// state = {
//     name: '',
//     number: ''
//     }
    


//     render() {
//         return (<form>
//             <label htmlFor='name'>
//             Name
//             <input
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//                 />
//                 <label htmlFor='number'>
//             Number
//                 <input
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                     />
//                 </label>
//             <button type="button">Add contact</button>
//         </label>
//     </form>);
//     }
// }



