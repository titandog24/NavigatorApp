import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import { StackNavigator } from './StackNavigator';
import { globalColor } from '../theme/theme';
import { View, useWindowDimensions } from 'react-native';
import { ButtonTabsNavigator } from './ButtonsTabsNavigator';
import { IonIcon } from '../components/IonIcon';
export type RootStacksParams = {
  Home: undefined;
  Product: {id: number, name: string};
  Products: undefined;
  Profile: undefined;
  Settings: undefined;
}

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  const dimesiones = useWindowDimensions();

  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />} 
    screenOptions={{
      drawerType:(dimesiones.width >= 758) ? 'permanent': 'slide',
      headerShown: false,
      drawerActiveBackgroundColor: globalColor.primary,
      drawerActiveTintColor: 'white',
      drawerInactiveTintColor: globalColor.primary,
      drawerItemStyle: {
        borderRadius: 100,
        paddingHorizontal: 20
      }
    }}>
      {/* <Drawer.Screen name="Stack" component={StackNavigator} /> */}
      <Drawer.Screen
        options={{
          drawerIcon:(({color})=>(<IonIcon name="bonfire-outline" size={20} color={color}/>))
        }} 
      name="Tabs" component={ButtonTabsNavigator} />
      <Drawer.Screen
      options={{
        drawerIcon:(({color})=>(<IonIcon name="person-outline" size={20} color={color}/>))
      }}  
      name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return(
    <DrawerContentScrollView>
      <View
      style={{
        height:200,
        backgroundColor: globalColor.primary,
        margin: 30,
        borderRadius: 50
      }}/>

      <DrawerItemList {...props} />

    </DrawerContentScrollView>
  );
}