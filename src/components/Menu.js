import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { getPizzas } from '../utils/pizzasApi.js';
import MenuItem from './MenuItem';
import './index.css';


// Menu file displaying menu item components mapped from the pizzas.json mock api
class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            pizzas: []
        };
    };

    componentDidMount() {
        this.setState({pizzas: getPizzas()});
    };

    render(){
        const pizzasArray = this.state.pizzas;
        return(
            <div className="menu-container">
                <h1 className="menu-title">Welcome to Ildi's Pizzeria Deluxe</h1>
                <div className="menu">
                {
                    pizzasArray.map(pizzaObj => <Link key={pizzaObj.url} to={`/pizza/${pizzaObj.url}`}> <MenuItem key={pizzaObj.url} name={pizzaObj.name} img={pizzaObj.img}/></Link>)
                }
                </div>
            </div>
        )
    };
};

export default Menu;