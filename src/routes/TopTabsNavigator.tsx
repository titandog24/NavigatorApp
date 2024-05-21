import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AboutScreen } from '../screens/About/AboutScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import HamburgerMenu from '../components/HamburgerMenu';
import { IonIcon } from '../components/IonIcon';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
    return (
        <>
            <HamburgerMenu />
            <Tab.Navigator>
                <Tab.Screen name="About" options={{
                    title: 'About',
                    tabBarIcon: ({ color }) => (
                        <IonIcon
                        name={'help-circle-outline'}
                        size={25}
                        color={color}
                        />
                    )
                }} component={AboutScreen} />
                <Tab.Screen name="Profile" options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <IonIcon
                        name={'people-outline'}
                        size={25}
                        color={color}
                        />
                    )
                }} component={ProfileScreen} />
            </Tab.Navigator>
        </>
    );
}