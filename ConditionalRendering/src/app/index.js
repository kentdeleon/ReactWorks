import React, {Component} from 'react';
import {render} from 'react-dom';
import LoginControl from './components/LoginControl.jsx';
import './components/style.css';

class App extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <LoginControl />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));