import React from 'react';
import {
    ContactItemList,
    BtnDelete,
} from './ContactsListItem.styled';

export const ContactListItem = ({ contact, onDelete }) => { 
    const {  name, number } = contact;
    return (
        <ContactItemList >
            <p>{name}</p>
            <p>{number}</p>
            <BtnDelete type="button" onClick={onDelete}>Delete</BtnDelete>
        </ContactItemList>
    );
};