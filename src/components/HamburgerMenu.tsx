import { DrawerActions, useNavigation } from "@react-navigation/native"
import { useEffect } from "react";
import { Pressable, Text } from "react-native";
import { IonIcon } from "./IonIcon";

export const HamburgerMenu = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable
                    style={{
                        marginLeft: 10
                    }}
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <IonIcon name="grid-outline" size={20} color="#999"/>
                </Pressable>
            )
        })
    }, [])

    return (<></>)
}

export default HamburgerMenu
