import React from 'react';
import ContactItem from './ContactItem';
 
function ContactList({ contacts, onDelete, onArchive }) {
  return (
    <div className="contact-list">
      {
        contacts.map((contact) => (
          <ContactItem 
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          onArchive={onArchive}
          isArchived={contact.archived}
          {...contact} />
        ))
      }
    </div>
  );
}
 
export default ContactList;