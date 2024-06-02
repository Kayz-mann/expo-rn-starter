import "react-native-get-random-values";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import Navigation from "./src/navigation";
import useCachedResources from "./fontSettings";
import { ThemeProvider } from "@shopify/restyle";

// import "./src/i18n";
import theme from "./src/components/Theme";
import { Provider } from "react-redux";
import store from "./store";

// hide splash screen when  app loads
SplashScreen.hideAsync();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <StatusBar style="auto" />
            <Navigation />
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}
