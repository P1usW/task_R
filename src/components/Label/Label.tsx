import React from 'react';

import '../../style/_label.scss'

interface LabelProps {
    labelName?: string,
    children?: React.ReactNode
}

const Label = (props: LabelProps) => {
    return (
        <label className='lbl'>
            {props.labelName}
            {props.children}
        </label>
    );
};

export default Label;