import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AppRegistry, TextInput} from 'react-native';


const padOn = require("./pics/padSelected.png");
const padOff = require("./pics/padGrey.png");


export default class App extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = { uriPad: require("./pics/padGrey.png"),
                      uriTamp: require("./pics/tamponGrey.png") }
        this.state = {text: ''};
    }
    changeLogo() {
        console.log('state changed!');
        this.setState({
            uriPad: require("./pics/padSelected.png")
        }); 
    }
    
   changeLogotamp() {
       
       console.log('state changed!');
        this.setState ({
            uriTamp: require("./pics/tamponSelected.png")
        });  
       
   }
    
    render() {
    return (
      <View style={styles.outer}>
        
        <Text style={styles.text}>What do you need? (select all that apply) </Text>
        <View style={styles.container}>
  
        <TouchableOpacity style={styles.container} onPress={() => this.changeLogotamp()}>
            <Image source={this.state.uriTamp} style ={styles.button}/> 
        </TouchableOpacity>
<TouchableOpacity style={styles.container} onPress={() => this.changeLogo()}>
            <Image source={this.state.uriPad} style ={styles.button}/> 
        </TouchableOpacity>
        </View>
<TextInput
          style={{height: 10}}
          placeholder="Type here"
          onChangeText={(text) => this.setState({text})}
        />
        

    </View>
    );
  }
  
}
const styles = StyleSheet.create({
  container: {
    flex: 8,
    flexDirection: 'row',
    backgroundColor: '#ffe2ff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
    outer: {
    flex: 8,
    flexDirection: 'column',
    backgroundColor: '#ffe2ff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
 
  },
    image: {
        
        
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    text: {
    
    color: '#a700a7',
    flex: 0,
    alignItems: 'center',
    fontSize: 20,
  
    flexDirection: 'row',
},
});
