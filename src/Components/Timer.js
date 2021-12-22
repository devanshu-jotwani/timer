import React, { Component } from 'react'
import '../css/timer.css';
export default class Timer extends Component {
    constructor(){
        super();
        this.state={
            count:1,
        }
        
        this.increment = this.increment.bind(this);
        this.decrement =this.decrement.bind(this);
        this.handleChange=this.handleChange.bind(this);

    }
    handleChange(e){
        e=parseInt(e);
        
        if (isNaN(e)){
            e=1;
        }
        if (e<1){
            e=1;
        }
        else if(e>1000)
            e=1000;
        

        this.setState({count:parseInt(e)});
    }
    increment(){
        if(this.state.count<1000){
            this.setState({
                count:this.state.count+1
            });
        }
            
    }
    
    decrement(){
        if(this.state.count > 1){
            this.setState({
                count:this.state.count-1
            });
        }
     }

    render() {
        return (
            <div className="container">
              <button className="decrement same" onClick={this.decrement}>-</button>                        
                                                                                                            
              <input className="same input" type="number" max="1000" min="1" steps="1" value={this.state.count} onChange={(event)=>{this.handleChange(event.target.value)}}/>
              <button className="increment same" onClick={this.increment}>+</button>  
            </div>
        )
    }
}
