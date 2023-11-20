import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useContext } from 'react';
import { CarrinhoContext } from '../contexts/CarrinhoContext';

export function Produto({ nome, foto, preco, local,navigation }) {
  const [produtos] = useContext(CarrinhoContext);

  const adicionarProduto = () => {
    produtos.push({ nome, foto, preco, local });
    navigation.navigate('Carrinho');
  };

  return (
    <View style={estilos.container}>
      <Image style={estilos.foto} source={{ uri: foto }} />
      <View style={estilos.info}>
        <Text>{nome}</Text>
        <Text>{local}</Text>
        <Text>R$ {preco}</Text>
        <Pressable onPress={adicionarProduto} style={estilos.botao}>
          <Text style={estilos.txtBotao}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 0.5
  },
  foto: {
    width: 100,
    height: 90,
    marginRight: 8,
  },
  info: {
    flex: 1,
    display: 'flex',
  },
  botao: {
    backgroundColor: 'green',
    padding: 4,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 8
  },
  txtBotao: {
    color: 'Black',
    textAlign: 'center',
  },
});
