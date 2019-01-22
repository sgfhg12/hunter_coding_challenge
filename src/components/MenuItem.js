import React, { Component } from 'react'; 
import './index.css';

/*
Reusable component of  menu items with a hover on mouse enter. 
Contains 2 divs the opacity changes on hover displaying the text or image. 
*/
class MenuItem  extends Component{
    constructor(props){
        super(props);
        this.state = {
            hovered: false
        };
    };

    onHover() {
        this.setState({hovered: !this.state.hovered});
    };

    render() { 
        return (
            <div>
                <div onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onHover.bind(this)} className="menu-box">
                    <div style={{'opacity': this.state.hovered ? 1 : 0 }} className="pizza-title">{this.props.name}</div>
                    <img style={{'opacity' : this.state.hovered ? 0.5 : 1, 'color': 'black'}} src={this.props.img} alt="Not found"/>
                </div>
            </div>
        )
    };
};

export default MenuItem;