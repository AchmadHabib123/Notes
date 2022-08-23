import React from 'react';
import NotesItemBody from './NotesItemBody';
import NotesItemImage from './NotesItemImage';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
 
function NotesItem({ imageUrl, title, body, createdAt,id, onDelete, onArchive, isArchived}) {
 return (
   <div className="notes-item">
     <NotesItemImage imageUrl={imageUrl} />
     <NotesItemBody title={title} body={body} createdAt={createdAt}/>
     <DeleteButton id={id} onDelete={onDelete} />
     <ArchiveButton id={id} onArchive={onArchive} isArchived={isArchived}/>
   </div>
 );
}
 
export default NotesItem;