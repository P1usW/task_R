import React from 'react';

import '../../style/_search-input.scss'

interface SearchInputProps {
    name: string,
    value: string | number,
    setValue: React.Dispatch<any>
    readonly checked: boolean
}

const SearchInput = (props: SearchInputProps) => {
    function change(event: React.ChangeEvent<HTMLInputElement>) {
        props.setValue(event.target.value);
    }

    return (
        <input className='search-input'
               name={props.name}
               value={props.value}
               type='radio'
               onChange={change}
               checked={props.checked}/>
    );
};

export default SearchInput;