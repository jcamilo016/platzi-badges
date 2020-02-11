/*const element = document.createElement('h1');
element.innerText = "Hello, Platzi Badges!";

const container = document.getElementById('app');

container.appendChild(element);*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

/*const jsx = <h1>Hello, Platzi Badges from React!</h1>;
const element = React.createElement('h1', {}, 'Hola! soy el texto');
const element2 = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a Platzi');*/
const container = document.getElementById('app');
/*const container2 = document.getElementById('link');
const container3 = document.getElementById('component');*/

/*const name = "Juan";
const edad = () => 30 + 1;
const element3 = React.createElement(
    'h1',
    {},
    `Hola soy ${name}`
);
const jsx2 = <h1>Hola soy {name + ' Camilo y tengo ' + edad() + ' años'}</h1>;
const jsx4 = <div>
    <h1>{`Hola, soy ${name}`}</h1>
    <p>Soy ingeniero de front end</p>
</div>;
//Ahora la expresion jsx4 expreado en React.createElement
const element4 = React.createElement(
    'div'
    , {}
    , React.createElement('h1', {}, `Hola, soy ${name}`)
    , React.createElement('p', {}, 'Soy ingeniero de front end')
);*/

//const component1 = <Badges/>;


//ReactDOM.render(___qué____,___dónde___)
/*ReactDOM.render(jsx2, container);
ReactDOM.render(element2, container2);
ReactDOM.render(element4, container);*/
ReactDOM.render(<App/>, container);

