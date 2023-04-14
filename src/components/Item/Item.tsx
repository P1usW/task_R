import React from 'react';

import '../../style/_item.scss'

interface ItemProps {
    title: string,
    src: string
}

const Item = (props: ItemProps) => {
    return (
        <div className='item'>
            <img className='item_photo' src={props.src} alt=''/>
            <div className='item_title'>{props.title}</div>
        </div>
    );
};

export default Item;