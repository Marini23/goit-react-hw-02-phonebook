import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';


export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }
  
  addContact = newContact => { 
    console.log(newContact);
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...newContact }, ...prevState.contacts]
    }))
  };

  deleteContact = contactId => {
    console.log(`delete`);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  
  render() {
    return (
    <div>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} onDelete ={this.deleteContact} />
    </div>)
  }
}

