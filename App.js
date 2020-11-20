import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import BotaoDaCalculadora from './Componentes/BotaoDaCalculadora';
import {estilo} from './Componentes/estilo';

class App extends Component {
  
  state = {visor: ""}

  addNumero(num){
    var val = this.state.visor + num
    this.setState({visor:val})
  }

  addOperador(op){
    this.setState({valor1: this.state.visor})
    this.setState({operacao:op})
    this.setState({visor:""})
    this.setState({res:""})
  }

  calcular(){
    var res = 0
    var valor1 = parseFloat(this.state.valor1) 
    var valor2 = parseFloat(this.state.visor)
    if(this.state.operacao == "+"){
      res = valor1 + valor2
    } else if(this.state.operacao == "-"){
      res = valor1 - valor2
    } else if(this.state.operacao == "*"){
      res = valor1 * valor2
    } else if(this.state.operacao == "/"){
      res = valor1 / valor2
    } 

    this.setState({res:valor2+ " = "+ res})
    this.setState({visor:""})
  }

  limpar(){
    this.setState({visor:""})
    this.setState({res:""})
    this.setState({valor1:""})
    this.setState({operacao:""})
  }

  render(){
    return <View style={estilo.cal}>
              <View style={{flexDirection:'row'}}>
                <View style={estilo.visor}>
                  <Text>{this.state.valor1} <Text>{this.state.operacao}</Text> <Text>{this.state.res}</Text></Text>
                  <Text>{this.state.visor}</Text>
                </View>
                <BotaoDaCalculadora style={estilo.button} onPress={this.limpar.bind(this)}>CE</BotaoDaCalculadora>
              </View>

              <View style={{flexDirection:'row'}}>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addNumero.bind(this,7)}>7</BotaoDaCalculadora>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addNumero.bind(this,8)}>8</BotaoDaCalculadora>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addNumero.bind(this,9)}>9</BotaoDaCalculadora>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addOperador.bind(this,"+")}>+</BotaoDaCalculadora>
              </View>

              <View style={{flexDirection:'row'}}>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addNumero.bind(this,4)}>4</BotaoDaCalculadora>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addNumero.bind(this,5)}>5</BotaoDaCalculadora>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addNumero.bind(this,6)}>6</BotaoDaCalculadora>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addOperador.bind(this,"-")}>-</BotaoDaCalculadora>
              </View>

              <View style={{flexDirection:'row'}}>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addNumero.bind(this,1)}>1</BotaoDaCalculadora>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addNumero.bind(this,2)}>2</BotaoDaCalculadora>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addNumero.bind(this,3)}>3</BotaoDaCalculadora>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addOperador.bind(this,"*")}>*</BotaoDaCalculadora>
              </View>
              <View style={{flexDirection:'row'}}>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addNumero.bind(this,0)}>0</BotaoDaCalculadora>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addNumero.bind(this,".")}>.</BotaoDaCalculadora>
                <BotaoDaCalculadora style={estilo.button} onPress={this.addOperador.bind(this,"/")}>/</BotaoDaCalculadora>
                <BotaoDaCalculadora style={estilo.button} onPress={this.calcular.bind(this)}>=</BotaoDaCalculadora>
              </View>

          </View>
  }
}
export default App;