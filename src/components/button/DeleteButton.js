import React from 'react';
 
function DeleteButton({ id, onDelete}) {
  return <button className='notes__delete' onClick={() => onDelete(id)}>Hapus</button>
}
 
export default DeleteButton;