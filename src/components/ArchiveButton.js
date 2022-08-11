import React from 'react';
 
function ArchiveButton({ id, onArchive }) {
  return <button className='contact-item__archive' onClick={() => onArchive(id)}>Arsip</button>
}
 
export default DeleteButton;
