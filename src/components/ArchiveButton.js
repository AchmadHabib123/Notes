import React from 'react';
 
<<<<<<< HEAD
function ArchiveButton({ id, onArchive, isArchived }) {
  return <button className='contact-item__archive' onClick={() => onArchive(id)}>{isArchived ? 'Pindahkan' : 'Arsipkan'}</button>
}
 
export default ArchiveButton;
=======
function ArchiveButton({ id, onArchive }) {
  return <button className='contact-item__archive' onClick={() => onArchive(id)}>Arsip</button>
}
 
export default DeleteButton;
>>>>>>> 7dabe52580df8cc881445f9668aad80e81d78e31
