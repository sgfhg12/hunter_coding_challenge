import React, { Component } from 'react'; 
import { getPizza } from '../utils/pizzasApi.js';
import { Link } from 'react-router-dom';

/*
Resuable component of individual pizza page takes the route paramater 
and hits the getpizza function to dynamically get the specific pizza clicked.
*/
class Pizza extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            img: "",
            description: ""
        };
    };

    componentDidMount(){
        const { name, img, description } = getPizza(this.props.match.params.pizza);
        this.setState({ name, img, description });
    };

    render(){
        return(
            <div className="pizza-container">
                <h1 className="title" >{this.state.name}</h1>
                <img className="pizza-img" src={this.state.img} alt="Not found :(."/>
                <div className="pizza-description-container">
                    <p className="pizza-description">{this.state.description}</p>
                    <Link to="/"> Go Back </Link>
                </div>
            </div>
        )
    };
};

export default Pizza;