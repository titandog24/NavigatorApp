import { StyleSheet } from "react-native";

export const globalColor = {
    primary: '#7037eb',
    secondary: '#f72585',
    tertiary: '#3a0ca3',
    success: '#4cc9f0',
    warning: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',
    background: '#fff'
};

export const globalStyles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
        backgroundColor: globalColor.background,
    },
    primaryButton: {
        backgroundColor: globalColor.primary,
        fontSize: 10,
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },
    buttonText: {
        color: globalColor.background,
        fontSize: 10,
        padding: 10
    }
});