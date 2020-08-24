import React, { Component } from 'react';
import { View, Text, StyleSheet, TextBase, } from 'react-native';

class slider extends Component{
    constructor(props){
        super(props);
        this.state = { 
            valor: 0,
         };
    }

    render(){
        return(
            <View style={styles.container}>

            <Slider 
            minimumValue={0}
            maximumValue={100}
            onValueChange={ (valorSelecionado)=> this.setState({valor: valorSelecionado}) }
            value={this.state.valor}
            minimumTrackTintColor="#00FF00"
            maximumTrackTintColor="#FF0000"
            />

            <Text style={{textAlign: 'center', fontSize: 30}}>
                {this.state.valor}
            </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container={
        flex:1,
        marginTop: 15
    },
});

export default slider;