import React from 'react';
import './ContactMe.css';


const ContactMe=()=>{
    return (
                <div className="contact-me">
                    <div className="info">
                        <h2>Contact Me</h2>
                        <address className="paragrph">
                            800 W Renner Rd, #2926<br/>
                            Richardson, TX, 75080 <br/>
                            United States<br/>
                        </address>
                        <p className="paragrph">
                            <strong>Email:</strong> me@vikramgopali.com <br/>
                            <strong>Phone:</strong> +1 (469)-380-4228
                        </p>
                    </div>
                    <div className="cardEmailMMe">
                        <form className="form">
                            <label>Name *</label>
                            <input type="text" name="Name" placeholder="Your Name"/>
                            <label>Email Adress *</label>
                            <input type="email" name="Email Adress" placeholder="Your E-mail "/>
                            <label>Message *</label>
                            <textarea name="Message" rows="10" cols="80" placeholder="Your Message"></textarea>
                            <button className="contactButton">Send Mail</button>
                        </form>
                    </div>
                </div>
    );
};

export default ContactMe;