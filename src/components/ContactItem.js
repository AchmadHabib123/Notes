import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
 
function ContactItem({ imageUrl, name, tag, id, onDelete, onArchive}) {
 return (
   <div className="contact-item">
     <ContactItemImage imageUrl={imageUrl} />
     <ContactItemBody name={name} tag={tag} />
     <DeleteButton id={id} onDelete={onDelete} />
     <ArchiveButton id={id} onArchive={onArchive} />
   </div>
 );
}
 
export default ContactItem;