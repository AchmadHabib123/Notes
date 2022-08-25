import React from 'react';
 
class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        title: '',
        body: '',
        limit:50,
        }
 
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
 
    onTitleChangeEventHandler(event) {
        if(this.state.limit >= 0 && event.target.value.length <= 50){
            this.setState(() => {
              return {
                title : event.target.value,
                limit: 50 - event.target.value.length,
              }
            });
          }
    }
 
    onBodyChangeEventHandler(event) {
    this.setState(() => {
        return {
        body: event.target.value,
        }
    });
    }
 
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
        this.setState(() => {
            return {
                title : '',
                body : '',
                limit: 50,
            }
        });
    }
 
    // fungsi render disembunyikan
    render() {
        return (
        <form className='notes-input' onSubmit={this.onSubmitEventHandler}>
            <p className='notes-input__title__char-limit'>Sisa karakter: {this.state.limit}</p>
            <input className="notes-input__title" type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            <textarea className= "notes-input__body" type="text" placeholder="Deskripsi" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
            <button type="submit">Tambah</button>
        </form>
        )
    }
}
 
export default NotesInput;