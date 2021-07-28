import react, { useEffect, useState } from 'react';
import {getQuote} from '../services';
import style from './CSS/QuoteMaker.css';

export const QuoteMaker = (props) => {
    let [quote, setQuote] = useState('generating...');
    let [author, setAuthor] = useState('');
    let [generating, setGenerating] = useState(false);

    useEffect(async () => {
        const data = await getQuote();
        console.log(data.content);
        setQuote("\"" + data.content + "\"");
        setAuthor("- " + data.author);
        setGenerating(false);
    }, []);

    const generateQuote = () => {
        setQuote("generating...");
        setAuthor('');
        const generatingTimeout = setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    return(
        <div className="space">
            <label className="quote">{quote}</label>
            <br />
            <label className="author">{author}</label>
            <br />
            <br />
            <button className="generate" onClick={generateQuote}>Generate</button>
        </div>
    )
}