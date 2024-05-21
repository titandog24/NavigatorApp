import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { ProductScreen } from '../screens/Product/ProductScreen';
import { SettingScreen } from '../screens/Settings/SettingScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import { ProductsScreen } from '../screens/Product/ProductsScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export type RootStacksParams = {
  Home: undefined;
  Product: {id: number, name: string};
  Products: undefined;
  Profile: undefined;
  Settings: undefined;
}

const Stack = createStackNavigator<RootStacksParams>();

export const StackNavigator = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerShown: false
    })
  }, [])
  

  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
}