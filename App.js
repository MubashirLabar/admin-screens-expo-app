import { SafeAreaView, ScrollView } from "react-native";
import Login from "./screens/Login";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

export default function App() {
  const [loadedFonts] = useFonts({
    regular: Montserrat_400Regular,
    thin: Montserrat_100Thin,
    light: Montserrat_300Light,
    medium: Montserrat_500Medium,
    semiBold: Montserrat_600SemiBold,
    bold: Montserrat_700Bold,
    extraBold: Montserrat_800ExtraBold,
  });

  if (!loadedFonts) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Login />
      </ScrollView>
    </SafeAreaView>
  );
}
