import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class FlatList extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed:[
                {id:'1', nome: 'Matheus', idade: 50, email: 'matheus@matheys.com'},
                {id:'2', nome: 'Joao', idade: 50, email: 'joao@matheys.com'},
                {id:'3', nome: 'Hnerique', idade: 50, email: 'henrique@matheys.com'},
                {id:'4', nome: 'Paulo', idade: 15, email: 'paulo@matheys.com'},
            ]
        };
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.feed}
                    keyExtractor={(item) => item.id} //propriedade para passar a key da lista acaso nao seja encontrada automaticamente
                    renderItem={ ({item}) => <Pessoa data={item} /> } 
                />
                    
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    areaPessoa:{
        backgroundColor:'#222',
        height:200,
        marginBottom:15
    },
    textoPessoa:{
        color:'#FFF',
        fontSize:20,
    }
});

export default FlatList;

class Pessoa extends Component{
    render(){
        return(
            <View style={styles.areaPessoa}>
                <Text style={styles.textoPessoa}>Nome: {this.props.data.nome} </Text>
                <Text style={textoPessoa}>Idade: {this.props.data.idade} </Text>
                <Text style={textoPessoa}>Email: {this.props.data.email} </Text>
            </View>
        );
    }
}


