import React from 'react';

import '../../style/_search-input.scss'

interface SearchInputProps {
    search: string,
    setSearch: React.Dispatch<string>
}

const SearchInput = ({search, setSearch}: SearchInputProps) => {
    function change(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    return (
        <input className='search-input'
               value={search}
               onInput={change}
               type='search'
               placeholder='Поиск...'/>
    );
};

export default SearchInput;