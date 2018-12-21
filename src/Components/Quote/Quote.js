import React from 'react';
import './Quote.css';




const Quote = ()=>{
    let quote = [
        {
            quote : 'There is No Substitute for Hard Work.',
            author : 'Thomas A Edison'
        },
        {
            quote : 'Failure is the opportunity to begin again, more intelligently.',
            author : 'Henry Ford'
        }
    ];

    let ind = Math.floor(Math.random()*(quote.length))
    console.log();
    return(
        <div className="blockQuote">
            <div className="quoteSymbol"></div>
            <div className="quote">{quote[ind].quote}</div><br/>
            <div className=" quote quoteAuthor">- {quote[ind].author}</div>
        </div>
    );
}


export default Quote;