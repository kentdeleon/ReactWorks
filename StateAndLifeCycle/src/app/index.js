import React, {Component} from 'react';
import {render} from 'react-dom';
import Clock from './components/Clock.jsx';
import './components/style.css';

class App extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
               <Clock/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));