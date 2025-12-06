import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen name="home" options={{ title: "" }} />
      <Tabs.Screen name="portfolio" options={{ title: "" }} />
      <Tabs.Screen name="transactions" options={{ title: "" }} />{" "}
      {/* ✅ This must exist! */}
      <Tabs.Screen name="settings" options={{ title: "" }} />
    </Tabs>
  );
}
