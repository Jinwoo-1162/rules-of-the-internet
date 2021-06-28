import React from 'react';
import { useState, useEffect } from 'react';

export const Textbox = (props) => {
    let [answer, setAnswer] = useState(0);
    let [val1, setVal1] = useState(0);
    let [currOp, setCurrOp] = useState('');
    let [showAns, setShowAns] = useState(false);
    let [cleared, setCleared] = useState(true);

    function handleNum(num) {
        setShowAns(false);
        setVal1(val1 * 10 + num);
    }

    function handleDel() {
        setShowAns(false);
        setVal1(Math.trunc(val1 / 10));
    }

    function handleClear() {
        setShowAns(false);
        setCleared(true);
        setVal1(0);
        setAnswer(0);
    }

    function handleOps(op) {
        setShowAns(false);
        setAnswer(val1);
        switch(op) {
            case "add" : setCurrOp('add'); break;
            case "sub" : setCurrOp('sub'); break;
            case "div" : setCurrOp('div'); break;
            case "mul" : setCurrOp('mul'); break;
            default : return;
        }
        setVal1(0);
    }

    function handleEquals() {
        switch(currOp) {
            case "add" : setAnswer(answer + val1); break;
            case "sub" : setAnswer(answer - val1); break;
            case "div" : setAnswer(answer / val1); break;
            case "mul" : setAnswer(answer * val1); break;
            default : return;
        }
        setShowAns(true);
    }

    return (
        <div>
            <label>{showAns? answer : val1}</label>
            <br />
            <button onClick={() => handleOps("add")}>+</button>
            <button onClick={() => handleOps("sub")}>-</button>
            <button onClick={() => handleOps("div")}>÷</button>
            <button onClick={() => handleOps("mul")}>x</button>
            <button onClick={handleEquals}>=</button>
            <button onClick={handleDel}>del</button>
            <button onClick={handleClear}>clear</button>
            <br />
            <button onClick={() => handleNum(1)}>1</button>
            <button onClick={() => handleNum(2)}>2</button>
            <button onClick={() => handleNum(3)}>3</button>
            <br />
            <button onClick={() => handleNum(4)}>4</button>
            <button onClick={() => handleNum(5)}>5</button>
            <button onClick={() => handleNum(6)}>6</button>
            <br />
            <button onClick={() => handleNum(7)}>7</button>
            <button onClick={() => handleNum(8)}>8</button>
            <button onClick={() => handleNum(9)}>9</button>
            <br />
            <button onClick={() => handleNum(0)}>0</button>
        </div>
    );
}