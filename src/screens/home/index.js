import react, {useState, useEffect} from "react";

import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Home(){

    //criando states
    let [tarefa, setTarefa] = useState('');
    let [titulo, setTitulo] = useState('');
    let [tarefaDiaria, setTarefaDiaria] = useState('');
    
    //criando função pra adidcionar tarefa
    
    function adicionarTarefa(){

        if(tarefa.trim() != ''){                 //trim verifica se tem informação
            const dados = {
                 id: String(new Date().getTime()),
                nome: tarefa,
          };
     
          //alert("clicou");
      
          setTarefaDiaria((oldState) => [... oldState, dados]); //esse operador "=>" pega o valor oldState e soma a mais  dados
          setTarefa('');
       }
       else{
           alert('Digite Nova Tarefa')

            }
        }


        function deletarTarefa(index){

        console.log('id tarefa:' + index);    
        
        let novasTarefas = [...Tarefas];
        novasTarefas = novasTarefas.filter((item, i)=>{
            if (item.id != index) {
                return true;
            }
            else{
                return false;
            }

        });
        setTarefaDiaria(novasTarefas);
        
    




}
return(
    <View style = {styles.container}>
        
        <Text style={styles.subTitulo}>Tarefas Diária a Cumprir</Text>

        <TextInput 
            value= {tarefa}
            returnKeyType = "done"
            style = {styles.campo}
            onChangeText = {setTarefa}
            placeholder = "Digite sua tarefa"/>


        <TouchableOpacity style={styles.botao} onPress = {adicionaTarefa}>
                <Text style = {styles.textoBotao} >Adicionar</Text>
               
        </TouchableOpacity>


        <Text style={styles.titulo}>Tarefas</Text>

        <FlatList
            data        ={minhasTarefas}
            //horizontal = {true}
            keyExtractor={(item) => item.id}
            renderItem={(({item}) =>
                <View style = {styles.botaoTarefa}>
                    <View style = {{flexDirection: 'row', justifyContent:'space-between'}}>
                    <Text style={styles.textoBotaoTarefa}>{item.nome}</Text>
                        <TouchableOpacity onPress={()=> deletartarefa(item.id)}>
                            <Ionicons name="md-checkmark-circle" size={32} color="white"/>
                        </TouchableOpacity>
                
                    </View>
                </View>
            
             )}/>

        </View>

);

}

const styles = StyleSheet.create({

    container:{
          flex:1,
          backgroundColor: '#0000FF',
          paddingVertical: 70,
          paddingHorizontal: 20
    },


    titulo:{
        color: '#8B4513',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },

    subTitulo:{
        color: '#BC8F8F',
        fontSize: 15

    },

    campo:{
        backgroundColor:'#FFFF00',
        color: '#BC8F8F',
        fontSize: 18,
        marginTop: 30,
        borderRadius: 7,
        padding:15
    },


    botao:{
        backgroundColor:'#000000',
        padding:15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
       
    },

    textoBotao:{
        color: '#4161BF',
        fontSize: 17,
        fontWeight: 'bold'

    },

    botaoTarefa:{
        backgroundColor:'#1F1E25',
        padding:15,
        marginBottom: 10
    },

    textoBotaoTarefa:{
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold'

    },
});