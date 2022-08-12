import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';
import ContactInput from './ContactInput';
 
class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    }
 
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }
 
  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }

  onArchiveHandler(id) {
    const contacts = this.state.contacts.map(contact => contact.id !== id ? {...contact, archived : !contact.archived} : contact);
    this.setState({ contacts });
  }

  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: '/images/default.jpg',
            archived: false,
          }
        ]
      }
    });
  }
 
 render() {
  const daftarContact = this.state.contacts.filter((contact) => {
    return contact.archived === false;
  });
  const archivedContact = this.state.contacts.filter((contact) => {
    return contact.archived === true;
  })
   return (
     <div className="contact-app">
      <h1>Aplikasi Kontak</h1>
       <h2>Tambah Kontak</h2>
       <ContactInput addContact={this.onAddContactHandler} />
       <h2>Daftar Kontak</h2>
       <ContactList contacts={daftarContact} onDelete={this.onDeleteHandler} onArchiveHandler={this.onArchiveHandler} />
       <h2>Arsip Kontak</h2>
       <ContactList contacts={archivedContact} onDelete={this.onDeleteHandler} onArchiveHandler={this.onArchiveHandler} />
     </div>
   );
 }
}
 
export default ContactApp;
