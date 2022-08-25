import React from 'react';
import NotesList from './NotesList';
import { getData } from '../utils/data';
import NotesInput from './NotesInput';
import SearchNotes from './search/SearchNotes';
import Message from './message/Message';
 
class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      search:'',
    }
 
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
 
  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map(note => note.id === id ? {...note, archived : !note.archived} : note);
    this.setState({ notes });
  }

  onSearch(title) {
    this.setState(() => {
      return {
        search : title
      }
    })
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            imageUrl: '/images/triangle.jpg',
            archived: false,
            createdAt: new Date()
          }
        ]
      }
    });
  }
 
 render() {
  const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()))
  const daftarNotes = notes.filter((note) => {
    return note.archived === false;
  });
  const archivedNotes = notes.filter((note) => {
    return note.archived === true;
  })
   return (
     <div className="notes-app">
      <h1>Data Notes </h1>
        <SearchNotes onSearch={this.onSearch} />
       <h2>Tambah Data</h2>
       <NotesInput addNotes={this.onAddNotesHandler} />
       <h2>Daftar Data</h2>
       {daftarNotes.length > 0 ? <NotesList notes={daftarNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} /> : <Message/>}
       <h2>Arsip Data</h2>
       {archivedNotes.length > 0 ? <NotesList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} /> : <Message/>}
     </div>
   );
 }
}
 
export default ContactApp;
