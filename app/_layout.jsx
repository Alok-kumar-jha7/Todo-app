import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false, title: "Home"}} />
    <Stack.Screen name="settings" options={{ headerShown: false, title:"Settings"}} />;
    </Stack>; 
}
