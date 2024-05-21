import { Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { PrimaryButton } from "../../components/PrimaryButton"
import { StackActions, useNavigation } from "@react-navigation/native"

export const SettingScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10 }}>SettingsScreen</Text>

      <PrimaryButton
        label="Regresar"
        onPress={() => navigator.goBack()}
      />

      <PrimaryButton
        label="Regresar al home"
        onPress={() => navigator.dispatch(StackActions.popToTop())}
      />
    </View>
  )
}
