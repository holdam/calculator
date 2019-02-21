import React, {Component} from 'react';
import './App.css';
import Calculator from './view/calculator/Calculator'
import Dog from './view/Dog'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Jenses awesome lommeregner</h1>
                <Calculator/>
                <Dog/>
            </div>
        );
    }
}

export default App;
