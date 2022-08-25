import React from 'react';
import { showFormattedDate } from '../../utils/data';
 
function NotesItemBody({ title, body, createdAt }) {
 return (
   <div className="notes-item__body">
     <h3 className="notes-item__title">{title}</h3>
     <p className="notes-item__username">{body}</p>
     <p className="notes-item__date">{showFormattedDate(createdAt)}</p>
   </div>
 );
}
 
export default NotesItemBody;