import { Stack } from "expo-router";
import "../global.css"; // Import global CSS here!

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
