import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Produto } from '../components/Produto';

export function HomeScreen({ navigation }) {
  const [produtos, setProdutos] = useState([
    {
      nome: 'Whopper',
      foto: 'https://th.bing.com/th/id/OIP.cGvBQtWLtGRVKQSm_ntHqQAAAA?pid=ImgDet&rs=1',
      local: 'Florianopolis',
      preco: 29.9,
    },
    {
      nome: 'BIG MAC',
      foto: 'https://th.bing.com/th/id/R.dbe2d972ee447dfca8dfc91789536d24?rik=Kxodx4KPF3PoBw&riu=http%3a%2f%2fimg.20mn.fr%2fo9yyTMGORKOwTFvIGJ2GhQ%2f2048x1536-fit_big-mac-lance-1967.jpg&ehk=SMTQV1%2btUyStBgt5Sb%2f8LQTxgDhgPV1AqNuY6AQDC9s%3d&risl=&pid=ImgRaw&r=0',
      local: 'SÃO JOSÉ',
      preco: 22.9,
    },
    {
      nome: 'Coxinha',
      foto: 'https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2023/02/coxinha-g772e5ca7a_1920.jpg',
      local: 'SÃO JOSÉ',
      preco: 4.5,
    },
  ]);

  return (
    <View>
      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <Produto
            nome={item.nome}
            preco={item.preco}
            foto={item.foto}
            local={item.local}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}
