import React from 'react';
import {Link} from 'react-router-dom';
import './NavElement.css';
import '../../Assets/Styles/global.css';

class NavElement extends React.Component{

    select=(name)=>{
        console.log("clicked"+name);
    };

    render(){
        return(
            <Link to={this.props.Link} style={{ textDecoration: 'none'}} className={this.props.Styles}>
                <div onClick={this.props.clickHandler} className="textProps">
                    {this.props.Name}
                </div>
            </Link>
        )
    }

};
export default NavElement;