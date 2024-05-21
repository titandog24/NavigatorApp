import { View, Text, Pressable } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/PrimaryButton';
import { RootStacksParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';
import { IonIcon } from '../../components/IonIcon';
export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStacksParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{
            marginLeft: 10
          }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        ><IonIcon name="grid-outline" size={20} color="#999" /></Pressable>
      )
    })
  }, [])


  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label='Productos'
        onPress={() => navigation.navigate('Products')} />
      <PrimaryButton
        label='Settings'
        onPress={() => navigation.navigate('Settings')} />

    </View>
  )
}

