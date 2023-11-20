import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CarrinhoContext } from '../contexts/CarrinhoContext';
import { useContext, useEffect, useState } from 'react';

export function CarrinhoScreen() {
  const [produtos] = useContext(CarrinhoContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let soma = 0;
    produtos.map((produto) => {
      soma += produto.preco;
    });

    setTotal(soma);
  }, []);

  return (
    <View style={estilo.container}>
      <Text>Itens: {produtos.length} </Text>
      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <Text style={estilo.compras}>
            {item.nome} - R$ {item.preco}
          </Text>
        )}
      />
      <Text style={estilo.valor} >Valor total: R$ {total}</Text>
    </View>
  );
}

const estilo = StyleSheet.create ({
  container:{
    flex: 1,
    textAlign: 'center',
  },
  valor:{
    color: 'red',
    fontSize: 25,
    fontWeight:'bold',
    borderRadius:10,
    borderBottomWidth: 5,
    borderColor:'black'

  },
  compras:{
    fontSize:15,
    fontWeight:'bold',
    borderRadius:10,
    borderBottomWidth: 2,
    borderColor:'black'
  }
});
