import React from 'react';

interface ValueInputProps {
    value: number,
    setValue: React.Dispatch<number>
}

const ValueInput = ({value, setValue}: ValueInputProps) => {
    function change(event: React.ChangeEvent<HTMLInputElement>) {
        const targetValue = +event.target.value
        if (!isNaN(targetValue)) setValue(targetValue);
    }

    return (
        <input className='search-input'
               value={value}
               onInput={change}
               type='search'
               placeholder='Поиск...'/>
    );
};

export default ValueInput;