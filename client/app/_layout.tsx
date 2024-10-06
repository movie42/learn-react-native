import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("@/shared/assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("@/shared/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("@/shared/assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("@/shared/assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("@/shared/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("@/shared/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("@/shared/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("@/shared/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("@/shared/assets/fonts/Poppins-Thin.ttf")
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
      </Stack>
    </QueryClientProvider>
  );
}
