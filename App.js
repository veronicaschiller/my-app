import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';
import Item from '/item.js'


export default function App() {
  const mercado = require("./assets/8-dicas-úteis.jpg")
  const [Product, setProduct] = useState("")
  const [lista, setLista] = useState([])

  const addNewProduct = () => {
    const novo = {
      id: new Date().getTime().toString(),
      nome: Product ? Product : "Arroz"
    } 
    // faz uma nova atribuição a lista , com os elemento ja existentes (...lista)  e o nome
    setLista([...lista, novo])
  // lista de conteudos de produto (por consequencia, o campo )
  setProduct("")
  }
  const itemLista = ({ item }) =>{
    <Item id={item.id} nome={item.nome} />
    // return(
    //   <Text>{item.id} - {item.nome}</Text>
    // )
  }
  return (
    <View style={styles.container}>
      <Image source={mercado} style={styles.img}/>
      <Text>lista de compras</Text>
     <view style={styles.novoProduto}>
      <TextInput 
      placeholder='informe o seu produto'
      placeholderTextColor='#aaa'
      style={styles.textInput}
      onChangeText={(texto) => setProduct(texto)}/>
      <TouchableOpacity  
      style={styles.button}
      onPress={addNewProduct}
      >
        <Text style={styles.textButton}>adicionar</Text>
      </TouchableOpacity>
      </view>
     <FlatList data= {lista}
     renderItem={itemLista}
     keyExtractor={(prod) => prod.id}
     />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.StatusBarHeght
  },
  img:{
    width:300,
    height: 150,
    margin:15,
    alignSelf:"center",
    
  },
  textInput:{
    borderWidth: 1,
    borderColor : '#ccc',
    width: "70%",
    padding: 10,
    marginRight: 8
  },
  novoProduto:{
    flexDirection:"row",
    justifyContent: "space-between",
    paddingBottom:10,
    borderBottomColor:"#ccc",
    borderBottomWidth:1
  },
  button:{
    width:100,
    backgroundColor:"#00f",
    alignItems: "center",
    padding: 5,
    borderRadius:5
  },
  textButton:{
    color:"#fff",
    fontWeight:18,
    marginTop: 6
  },
  titulo:{
    fontSize:22,
  }
});
