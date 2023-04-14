import React, {useState} from 'react';
import ValueInput from "../Input/ValueInput";
import calcValue from "./Calc";
import RadioInput from "../Input/RadioInput";

import '../../style/_calculator.scss';
import Label from "../Label/Label";

type Rotation = 'length' | 'width';

const Calculator = () => {
    // cm
    const [roomLength, setRoomLength] = useState(10);
    const [roomWidth, setRoomWidth] = useState(10);
    // mm
    const [length, setLength] = useState(10);
    const [width, setWidth] = useState(10);

    const [rotation, setRotation] = useState<Rotation>('length');
    const [numberInPackage, setNumberInPackage] = useState(1);

    const [answer, setAnswer] = useState<number>(0);
    const [answerPack, setAnswerPack] = useState<number>(0);

    function submit(event: React.SyntheticEvent) {
        event.preventDefault();
        const response = calcValue(roomLength, roomWidth, length, width, numberInPackage, rotation);
        setAnswer(response.quantity);
        setAnswerPack(response.quantityPack);
    }

    function change(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
    }

    return (
        <div className='calculator'>
            <Label labelName='Длина комнаты(м)'>
                <ValueInput value={roomLength} setValue={setRoomLength}/>
            </Label>
            <Label labelName='Ширина комнаты(м)'>
                <ValueInput value={roomWidth} setValue={setRoomWidth}/>
            </Label>
            <Label labelName='Длина(мм) (ламината/плитки)'>
                <ValueInput value={length} setValue={setLength}/>
            </Label>
            <Label labelName='Ширина(мм) (ламината/плитки)'>
                <ValueInput value={width} setValue={setWidth}/>
            </Label>
            <Label labelName='Число в упаковке'>
                <ValueInput value={numberInPackage} setValue={setNumberInPackage}/>
            </Label>

            <Label labelName='Направление укладки'>
                <label>
                    <RadioInput name='question'
                            value='length'
                            setValue={setRotation}
                            checked={rotation === 'length'}/>
                            по длине комнаты
                </label>
                <label>
                    <RadioInput name='question'
                                value='width'
                                setValue={setRotation}
                                checked={rotation === 'width'}/>
                                по ширине комнаты
                </label>
            </Label>
            <button type='submit' onClick={submit}>Рассчитать</button>

            <p>Количество плиток: <span>{answer}</span></p>
            <p>Количество упаковок: <span>{answerPack}</span></p>
        </div>
    );
};

export default Calculator;