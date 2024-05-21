import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { Text } from "react-native"
import { StackNavigator } from './src/routes/StackNavigator';
import { DrawerNavigator } from './src/routes/DrawerNavigator';
import { ButtonTabsNavigator } from './src/routes/ButtonsTabsNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator></DrawerNavigator>
      {/* <ButtonTabsNavigator /> */}
    </NavigationContainer>
  )
}
