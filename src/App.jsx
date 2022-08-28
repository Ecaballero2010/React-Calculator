import React from 'react';
import './App.css';
import Display from './componentes/display';
import Botones from './componentes/Botones';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      valor: '0'
    }

    this.handleNumber = this.handleNumber.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEval = this.handleEval.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleResta = this.handleResta.bind(this);
  }
 /* metodo que pone los numeros en el display*/
handleNumber(e){
  if(this.state.valor === '0'){
    this.setState({
      valor: e.target.value
    })
  }else{
    this.setState((state)=>({
      valor: state.valor + e.target.value
    }))
  }
}
/* metodo que borra el display*/
handleClear(){
  this.setState({
    valor: '0'
  })
}
/* metodo que evalua la expresion*/
handleEval(){
  let result = eval(this.state.valor);
  this.setState({
    valor: result
  })
}
/* metodo que determina si ya existe un punto y si no, lo agrega*/
handleDecimal(e){
  if(this.state.valor.indexOf('.') === -1){
    this.setState((state)=>({
      valor: state.valor + e.target.value
    }))
  }else{
    if(this.state.valor.indexOf('+')>=0||
    this.state.valor.indexOf('-')>=0||
    this.state.valor.indexOf('*')>=0||
    this.state.valor.indexOf('/')>=0){
      this.setState((state)=>({
        valor: state.valor + e.target.value
      }))
  }
  }
  
}
/* metodo que determina si el ultimo valor ingresado es un operador y lo reasigna*/
handleOperator(e){
  if(this.state.valor[this.state.valor.length-1]=== '+'||
  this.state.valor[this.state.valor.length-1]=== '-'||
  this.state.valor[this.state.valor.length-1]=== '*'||
  this.state.valor[this.state.valor.length-1]=== '/'){
    if(this.state.valor[this.state.valor.length-2]=== '/'||
    this.state.valor[this.state.valor.length-2]=== '*'||
    this.state.valor[this.state.valor.length-2]=== '+'||
    this.state.valor[this.state.valor.length-2]=== '-'){
      let valArr = this.state.valor.split('').slice(0, this.state.valor.length-2).join('');
      this.setState({
        valor: valArr + e.target.value
    })
    }else{
      let valArr = this.state.valor.split('').slice(0, this.state.valor.length-1).join('');
      this.setState({
        valor: valArr + e.target.value
    })
    }
  }else{
    this.setState((state)=>({
      valor: state.valor + e.target.value
    }))
  }
}
  
/* metodo que determina si el ultimo valor es una resta y no permite poner otra*/
handleResta(e){
  if(this.state.valor[this.state.valor.length-1]=== '-'){
    this.setState((state)=>({
      valor: state.valor
    }))
  }else{
    this.setState((state)=>({
      valor: state.valor + e.target.value
    }))
  }
}

  render(){
    return (
      <div className="App">
        <Display valor={this.state.valor}/>
        <Botones number={this.handleNumber} clear={this.handleClear} eval={this.handleEval} decimal={this.handleDecimal} operator={this.handleOperator} resta={this.handleResta}/>
      </div>
    );
  }
}

export default App;
