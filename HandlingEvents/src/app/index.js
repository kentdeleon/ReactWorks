import React, {Component} from 'react';
import {render} from 'react-dom';
import Toggle from './components/Toggle.jsx';
import './components/style.css';

class App extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <Toggle/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));