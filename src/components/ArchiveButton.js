import React from 'react';
 
function DeleteButton({ id, onArchive }) {
  return <button className='contact-item__archive' onClick={() => onArchive(id)}>Arsip</button>
}
 
export default DeleteButton;