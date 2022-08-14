import React from 'react';
 
class ContactInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        name: '',
        body: '',
        limit:50,
        }
 
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
 
    onNameChangeEventHandler(event) {
        if(this.state.limit > 0){
            this.setState((s) => {
              return {
                name : event.target.value,
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
            <p className='contact-input__name__char-limit'>Sisa karakter: {this.state.limit}</p>
            <input class="contact-input__name" type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
            <textarea class= "contact-input__body" type="text" placeholder="Description" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
            <button type="submit">Tambah</button>
        </form>
        )
    }
}
 
export default ContactInput;