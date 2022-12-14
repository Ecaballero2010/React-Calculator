import React from "react";
import './Botones.css'

class Botones extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="botones-div">
                <button id="clear" onClick={this.props.clear}>AC</button>
                <button id="divide" value='/' onClick={this.props.operator}>/</button>
                <button id="multiply" value='*' onClick={this.props.operator}>X</button>
                <button id="seven" value='7' onClick={this.props.number}>7</button>
                <button id="eight"value='8' onClick={this.props.number}>8</button>
                <button id="nine" value='9' onClick={this.props.number}>9</button>
                <button id="subtract" value='-' onClick={this.props.resta}>-</button>
                <button id="four"value='4' onClick={this.props.number}>4</button>
                <button id="five" value='5' onClick={this.props.number}>5</button>
                <button id="six" value='6' onClick={this.props.number}>6</button>
                <button id="add" value='+' onClick={this.props.operator}>+</button>
                <button id="one" value='1' onClick={this.props.number}>1</button>
                <button id="two" value='2' onClick={this.props.number}>2</button>
                <button id="three" value='3' onClick={this.props.number}>3</button>
                <button id="equals" onClick={this.props.eval}>=</button>
                <button id="zero" value='0' onClick={this.props.number}>0</button>
                <button id="decimal" value='.' onClick={this.props.decimal}>.</button>
            </div>
            
        )
    }
}

export default Botones;