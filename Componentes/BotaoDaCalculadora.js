import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

class BotaoDaCalculadora extends Component {
    size = 50
  render(){
    return <TouchableOpacity onPress={this.props.onPress}
            style={[{backgroundColor:'cyan', 
                    width:this.size,
                    height:this.size,
                    alignItems: 'center',
                    justifyContent: 'center'},
                    
                    this.props.style]}>
              <Text>{this.props.children}</Text>
          </TouchableOpacity>
  }
}
export default BotaoDaCalculadora;