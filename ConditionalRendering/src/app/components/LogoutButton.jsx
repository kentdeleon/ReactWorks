import React, {Component} from 'react';

export default class LogoutButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={this.props.onClick}>Logout</button>
        );
    }
}