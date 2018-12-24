import React from 'react';
import './ContactMe.css';


class ContactMe extends React.Component{

    constructor(props){
        super(props);
        this.state = {
                name:'',
                from:'',
                message:''
        };
        this.sendMail = this.sendMail.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    getapi(apiOptions){
        fetch("http://localhost:7000/mailMe",apiOptions).then(success=>{
            console.log('this',success);
            window.alert(success.message);
            this.setState({
                name:'',
                from:'',
                message:''
            });
            return success.json();
        }).catch(error=>{
            console.log(error);
            this.setState({
                name:'',
                from:'',
                message:''
            });
        });
    }

    sendMail(event){
        event.preventDefault();
        console.log(this.state);
        let apiOptions = {
            method : "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        };
        console.log(this.getapi(apiOptions));

    }

    updateField(event){
        let newState = {};
        newState[event.target.name] = event.target.value;
        console.log("coming here",newState);
        this.setState(newState);
    }

    render(){
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
                    <form className="form" onSubmit={this.sendMail}>
                        <label>Name *</label>
                        <input type="text" name="name" placeholder="Your Name" onChange={this.updateField} value={this.state.name}/>
                        <label>Email Adress *</label>
                        <input type="email" name="from" placeholder="Your E-mail" onChange={this.updateField} value={this.state.from}/>
                        <label>Message *</label>
                        <textarea name="message" rows="10" cols="80" placeholder="Your Message" onChange={this.updateField} value={this.state.message}></textarea>
                        <input id='formButton' className='contactButton' type='submit' placeholder='Send message' />
                    </form>
                </div>
            </div>
        );
    }
};

export default ContactMe;