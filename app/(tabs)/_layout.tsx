import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "" }} />
      <Tabs.Screen name="portfolio" options={{ title: "" }} />
      <Tabs.Screen name="transactions" options={{ title: "" }} />
      <Tabs.Screen name="settings" options={{ title: "" }} />
    </Tabs>
  );
}
