import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Text, FlatList } from 'react-native';
import { RootStacksParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/PrimaryButton';

const productos = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },
  { id: 4, name: 'Producto 4' },
  { id: 5, name: 'Producto 5' },
  { id: 6, name: 'Producto 6' },
  { id: 7, name: 'Producto 7' }
]

export const ProductsScreen = () => {
  
  const navigation = useNavigation<NavigationProp<RootStacksParams>>();

  return (
    <View style={globalStyles.container}>
      <Text>ProductScreen</Text>

      <FlatList
        data={productos}
        renderItem={({ item }) => (
          <PrimaryButton
            key={item.id}
            onPress={() => navigation.navigate('Product', {id: item.id, name: item.name})}
            label={item.name}
          />
        )}
      />

      <Text style={{marginBottom: 10, fontSize: 30}}>Ajustes</Text>
      <PrimaryButton 
      onPress={()=>navigation.navigate('Settings')}
      label='Ajustes'
      />
    </View>
  )
}

