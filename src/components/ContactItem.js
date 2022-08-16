import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
 
function ContactItem({ imageUrl, title, body, createdAt,id, onDelete, onArchive, isArchived}) {
 return (
   <div className="contact-item">
     <ContactItemImage imageUrl={imageUrl} />
     <ContactItemBody title={title} body={body} createdAt={createdAt}/>
     <DeleteButton id={id} onDelete={onDelete} />
     <ArchiveButton id={id} onArchive={onArchive} isArchived={isArchived}/>
   </div>
 );
}
 
export default ContactItem;