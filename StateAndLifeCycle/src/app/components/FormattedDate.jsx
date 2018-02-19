import React, {Component} from 'react';

export default class FormattedDate extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <h2>Time is {this.props.date.toLocaleTimeString()}</h2>
        );
    }
}