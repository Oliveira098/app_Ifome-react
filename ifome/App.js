import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/Home';
import { CarrinhoScreen } from './screens/Carrinho';
import { CarrinhoContext } from './contexts/CarrinhoContext';
import { useState } from 'react';

const Stack = createStackNavigator();

export default function App() {
  const [produtos, setProdutos] = useState([]);

  return (
    <CarrinhoContext.Provider value={[produtos, setProdutos]}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CarrinhoContext.Provider>
  );
}