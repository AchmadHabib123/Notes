import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
 
function ContactItem({ imageUrl, title, body, id, onDelete, onArchive, isArchived}) {
 return (
   <div className="contact-item">
     <ContactItemImage imageUrl={imageUrl} />
     <ContactItemBody name={title} body={body} />
     <DeleteButton id={id} onDelete={onDelete} />
     <ArchiveButton id={id} onArchive={onArchive} isArchived={isArchived}/>
   </div>
 );
}
 
export default ContactItem;