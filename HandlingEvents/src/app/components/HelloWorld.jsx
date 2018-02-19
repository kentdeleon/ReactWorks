import React, {Component} from 'react';

export default class HelloWorld extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={this.props.className}>{this.props.message}</div>
        );
    }
}