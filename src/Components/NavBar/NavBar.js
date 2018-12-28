import React from 'react';
import './NavBar.css';
import NavElement from "../NavElement/NavElement";



class NavBar extends React.Component{



    constructor(props) {
        super(props);
        this.items = [
            {
                Name:"Home",
                Link:"/",
                Key:1
            },
            {
                Name:"Skills",
                Link:"/skills",
                Key:2
            },
            {
                Name:"Contact Me",
                Link:"/contact",
                Key : 4
            }];
        this.changeRoute = this.changeRoute.bind(this);
        this.state = {
            route:"Home",

        };
    }

    componentDidMount(){
        this.changeRoute("Home");
    }


    changeRoute(route){
        this.setState({route:route});
    }



    render(){
        return (
            <div className="navBar">
                <div className="navBarContents">
                    {this.items.map(item=>{
                        if(this.state.route === item.Name){
                            console.log("here")
                            return <NavElement Name={item.Name} key={item.Key} Styles={"navBarElement navBarElementSelected"} Link={item.Link} clickHandler={()=>this.changeRoute(item.Name)}/>;
                        }else{
                            return <NavElement Name={item.Name} key={item.Key} Styles={"navBarElement"} Link={item.Link} clickHandler={()=>this.changeRoute(item.Name)}/>;
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default NavBar;