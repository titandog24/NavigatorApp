import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { globalColor } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/IonIcon';

const Tab = createBottomTabNavigator();

export const ButtonTabsNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: globalColor.background
            }}
            screenOptions={{
                tabBarLabelStyle: {
                    marginBottom: 5
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent'
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0
                }
            }}
        >
            <Tab.Screen name="Tab1" options={{
                title: 'Tab1',
                tabBarIcon: ({ color }) => (<IonIcon name="bug-outline" size={20} color="#999"/>)
            }} component={Tab1Screen} />
            <Tab.Screen name="Tab2" options={{
                title: 'Tab2',
                tabBarIcon: ({ color }) => (<IonIcon name="rocket-outline" size={20} color="#999"/>)
            }} component={TopTabsNavigator} />
            <Tab.Screen name="Tab3" options={{
                title: 'Tab3',
                tabBarIcon: ({ color }) => (<IonIcon name="home-outline" size={20} color="#999"/>)
            }} component={StackNavigator} />
        </Tab.Navigator>
    );
}