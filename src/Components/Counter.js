import React from 'react';
import {useState, useEffect} from 'react';

export const Counter = (props) => {

    let [count, setCount] = useState(0);
    let [visibility, setVisibility] = useState(true);

    function handlerUp() {
        setCount(++count);
        setVisibility(false);
    }

    function reset() {
        setCount(0);
        setVisibility(false);
    }

    function handlerDown() {
        setCount(--count);
        setVisibility(false);
    }
    return (
        <div>
            <p>This is a simple demonstration of a counter: {(visibility)? props.init: count}</p>
            <ul>
            <li><button size="sm" onClick={handlerUp}>Going Up</button></li>
            <li><button onClick={handlerDown}>Going Down</button></li>
            <li><button onClick={reset}>Reset</button></li>
            </ul>
        </div>
    );
}