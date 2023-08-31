import React  from 'react';
import * as Yup from 'yup';
import { Formik } from "formik";
import {
    StyledForm,
    Label,
    StyledField,
    StyledButton,
    Title,
    ErrorMsg,
} from './ContactForm.styled';

const nameRegex = /[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const numberRegex = /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/;


    const formSchema = Yup.object().shape({
        name: Yup.string()
        .matches(nameRegex, {message: `Name may contain only letters, apostrophe, dash and spaces.`})
        .required('Required'),
        number: Yup.string()
        .matches(numberRegex, {message:`Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.`})
        .required('Required'),
    });






export const ContactForm = ({onAdd}) => {
    return (
        <div className="App">
        <Title>Phonebook</Title>
    <Formik
            initialValues={{ name: "", number: "" }}
            validationSchema={formSchema}
            onSubmit= {(values, actions) => {
                onAdd(values);
                actions.resetForm();
        }}
        >
            <StyledForm>
            <Label htmlFor='name'>
                    Name
            <StyledField type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required />
                <ErrorMsg name="name" component="div"/>
            </Label>
            <Label htmlFor='number'>
                        Number
            <StyledField type="tel"
                name="number"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required />
                    <ErrorMsg name="number" component="div"/>
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



