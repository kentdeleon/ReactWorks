import React, {Component} from 'react';
import HelloWorld from './HelloWorld.jsx';
import FormattedDate from './FormattedDate.jsx';

export default class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({date: new Date()});
    }
    render(){
        return(
            <div>
                   <HelloWorld className="MP" message="Hello from Clock component!"/>  
                   <FormattedDate date={this.state.date}/>
            </div>
        );
    }
}