import pizzaData from './pizzas.json';
//mock pizza api. mimicking GET all and GET by pizza name

function getPizza(pizza){
// Returns data of a single pizza given the pizza identifiers
    return pizzaData[pizza];
};

function getPizzas() {
// Returns pizzas array with the data modified to have the url 
// of the pizza flattened in each element of the array
    const allPizzas = Object.keys(pizzaData).map(pizza => ({...pizzaData[pizza], url: pizza}));
    return allPizzas;
}
export { getPizza, getPizzas }; 