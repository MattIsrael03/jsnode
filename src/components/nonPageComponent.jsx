import React,{Component} from "react";      
class Component3 extends Component{
    constructor(){
        super();
        this.state={
            sampleString : ":))"
    
        }
        this.state1={
            sampleString : "<3"
        }
    }
    componentDidMount(){

    }
    componentWillUnmount(){
    }
    render(){
        return(
            <div>
                <center>
                    <h2>{this.state.sampleString}</h2>
                    <h3>{this.state1.sampleString}</h3>
                </center>
            </div>
        );
    }
}
export default Component3;