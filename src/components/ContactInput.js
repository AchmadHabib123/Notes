import React from 'react';
 
class ContactInput extends React.Component {
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
        if(this.state.limit > 0){
            this.setState((s) => {
              return {
                title : event.target.value,
                limit: s.limit - 1
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
        this.props.addContact(this.state);
        this.setState(() => {
            return {
                title : '',
                body : '',
                limit: 50
            }
        });
    }
 
    // fungsi render disembunyikan
    render() {
        return (
        <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
            <p className='contact-input__title__char-limit'>Sisa karakter: {this.state.limit}</p>
            <input class="contact-input__title" type="text" placeholder="Nama" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            <textarea class= "contact-input__body" type="text" placeholder="Description" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
            <button type="submit">Tambah</button>
        </form>
        )
    }
}
 
export default ContactInput;