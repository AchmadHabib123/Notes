import React from 'react';
 
function NotesItemImage({ imageUrl }) {
 return (
   <div className="notes-item__image">
     <img src={imageUrl} alt="notes avatar"/>
   </div>
 );
}
 
export default NotesItemImage;