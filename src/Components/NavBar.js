import React from 'react';
import styling from './CSS/NavBar.css';

export const NavBar = (props) => {
    let bool = true;
    function reset() {
        var button = document.getElementById('meme');
        var labeled = document.getElementsByClassName('press')[0];
        console.log(button.style.animation);
        console.log(labeled.getElementsByTagName("label")[0].innerHTML);
        labeled.getElementsByTagName("label")[0].innerHTML = bool ? "0" : "meme";
        button.style.height= bool ? "4ch":"10ch"
        bool = !bool;
        button.style.animation = 'none';
        button.style.animation = '';
    }

    return (
        <div id="color-shift">
            <button id='meme' className="press" onClick={reset}><label>Press me</label></button>
        </div>
    );
}