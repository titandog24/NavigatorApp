import { Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStacksParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';

export const ProductScreen = () => {

  const params = useRoute<RouteProp<RootStacksParams, 'Product'>>().params;
  const navigation = useNavigation();
  useEffect(() => {
    
    navigation.setOptions({
      title: params.name
    });
    
  }, [])
  

  return (
    <View style={globalStyles.container}>
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
      }}>
        {params.id} - {params.name}
      </Text>
    </View>
  )
}

