import React from 'react';
import { ContactListItem } from 'components/ContactsListItem/ContactsListItem';

import { ListContacts } from './ContactsList.styled';

export const ContactList = ({ contacts, onDelete }) => { 
    return (
        <ListContacts>
            {contacts.map(contact => (
                <ContactListItem contact={contact} key={contact.id} onDelete={onDelete} />
            ))}
        </ListContacts>
    );
};