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
      search:'',
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
    const contacts = this.state.contacts.map(contact => contact.id === id ? {...contact, archived : !contact.archived} : contact);
    this.setState({ contacts });
  }

  onSearch(title) {
    this.setState(() => {
      return {
        search : title
      }
    })
  }

  onAddContactHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            title,
            body,
            imageUrl: '/images/default.jpg',
            archived: false,
            createdAt: new Date()
          }
        ]
      }
    });
  }
 
 render() {
  const contacts = this.state.contacts.filter((contact) => contact.title.toLowerCase().includes(this.state.search.toLowerCase()))
  const daftarContact = contacts.filter((contact) => {
    return contact.archived === false;
  });
  const archivedContact = contacts.filter((contact) => {
    return contact.archived === true;
  })
   return (
     <div className="contact-app">
      <h1>Data Notes </h1>
        <SearchNotes onSearch={this.onSearch} />
       <h2>Tambah Data</h2>
       <ContactInput addContact={this.onAddContactHandler} />
       <h2>Daftar Data</h2>
       <ContactList contacts={daftarContact} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
       <h2>Arsip Data</h2>
       <ContactList contacts={archivedContact} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
     </div>
   );
 }
}
 
export default ContactApp;
