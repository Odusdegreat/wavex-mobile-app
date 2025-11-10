import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { icon: "home", route: "/(tabs)", library: "feather" },
    { icon: "chart-donut", route: "/(tabs)/portfolio", library: "material" },
    {
      icon: "swap-horizontal",
      route: "/(tabs)/transactions",
      library: "material",
    },
    { icon: "settings", route: "/(tabs)/settings", library: "feather" },
  ];

  return (
    <View className="absolute bottom-0 left-0 right-0 z-50">
      <View
        className="flex-row justify-around items-center bg-white py-4"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 20,
          elevation: 10,
        }}
      >
        {tabs.map((tab, index) => {
          const active =
            pathname === tab.route ||
            (pathname === "/(tabs)" && tab.route === "/(tabs)");
          const iconColor = active ? "#00E5A0" : "#CBD5E1";

          return (
            <TouchableOpacity
              key={index}
              onPress={() => router.push(tab.route as any)}
              className="items-center justify-center w-14 h-14"
              activeOpacity={0.6}
            >
              {tab.library === "feather" ? (
                <Feather name={tab.icon as any} size={24} color={iconColor} />
              ) : (
                <MaterialCommunityIcons
                  name={tab.icon as any}
                  size={26}
                  color={iconColor}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
