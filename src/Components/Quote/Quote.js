import React from 'react';
import './Quote.css';


const quote = [
    {
    quote : 'There is No Substitute for Hard Work.',
    author : 'Thomas A Edison'
    },
    {
        quote : 'Failure is the opportunity to begin again, more intelligently.',
        author : 'Henry Ford'
    }
];

const Quote = ()=>(
    <div className="quote">
        <label>{quote[0].quote}</label><br/>
        <label>- {quote[0].author}</label>
    </div>
);

export default Quote;