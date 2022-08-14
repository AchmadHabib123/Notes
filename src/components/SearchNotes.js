import React from 'react';

function SearchNotes ({ titleSearch, onSearch}){
    return(
        <div className='search-note'>
            <input type='text' placeholder='Cari catatan...' value={titleSearch} onChange={(event) => onSearch(event.target.value)}/>
        </div>
    );
}

export default SearchNotes;