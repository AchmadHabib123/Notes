import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';
import ContactInput from './ContactInput';
import SearchNotes from './SearchNotes';
 
class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    }
 
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
 
  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }

  onArchiveHandler(id) {
<<<<<<< HEAD
    const contacts = this.state.contacts.map(contact => contact.id === id ? {...contact, archived : !contact.archived} : contact);
=======
    const contacts = this.state.contacts.map(contact => contact.id !== id ? {...contact, archived : !contact.archived} : contact);
>>>>>>> 7dabe52580df8cc881445f9668aad80e81d78e31
    this.setState({ contacts });
  }

  onSearch(name) {
    let contacts;
    if (name !== '' && name.length > 0) {
      contacts = this.state.contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(name.toLowerCase());
      });
    } else {
      contacts = getData();
    }
    this.setState({ contacts });
  }

  onAddContactHandler({ name, body }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            body,
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
        <SearchNotes onSearch={this.onSearchNote} />
       <h2>Tambah Kontak</h2>
       <ContactInput addContact={this.onAddContactHandler} />
       <h2>Daftar Kontak</h2>
<<<<<<< HEAD
       <ContactList contacts={daftarContact} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
       <h2>Arsip Kontak</h2>
       <ContactList contacts={archivedContact} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
=======
       <ContactList contacts={daftarContact} onDelete={this.onDeleteHandler} onArchiveHandler={this.onArchiveHandler} />
       <h2>Arsip Kontak</h2>
       <ContactList contacts={archivedContact} onDelete={this.onDeleteHandler} onArchiveHandler={this.onArchiveHandler} />
>>>>>>> 7dabe52580df8cc881445f9668aad80e81d78e31
     </div>
   );
 }
}
 
export default ContactApp;
