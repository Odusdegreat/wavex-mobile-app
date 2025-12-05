import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "./../context/ThemeContext";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const tabs = [
    { icon: "home", label: "Home", route: "/(tabs)", library: "feather" },
    {
      icon: "chart-donut",
      label: "Stats",
      route: "/(tabs)/portfolio",
      library: "material",
    },
    {
      icon: "swap-horizontal",
      label: "Trades",
      route: "/(tabs)/transactions",
      library: "material",
    },
    {
      icon: "settings",
      label: "Settings",
      route: "/(tabs)/settings",
      library: "feather",
    },
  ];

  // Debug: Log the pathname whenever it changes
  useEffect(() => {
    console.log("Current pathname:", pathname);
  }, [pathname]);

  const getActiveIndex = () => {
    const index = tabs.findIndex((tab) => pathname.startsWith(tab.route));
    console.log("Active index:", index);
    return index;
  };

  const activeIndex = getActiveIndex();

  const handlePress = (route: string) => {
    console.log("Navigating to:", route);
    router.push(route as any);
  };

  const activeHighlight = "#00E5A0";
  const inactiveText = isDark ? "#64748B" : "#94A3B8";

  return (
    <SafeAreaView
      edges={["bottom"]}
      className={isDark ? "bg-slate-900" : "bg-white"}
    >
      <View
        className={`flex-row justify-between px-8 pt-2.5 h-[70px] border-t border-black/10 ${
          isDark ? "bg-slate-900" : "bg-white"
        }`}
      >
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          console.log(`${tab.label} - isActive:`, isActive);

          return (
            <TabButton
              key={tab.route}
              tab={tab}
              isActive={isActive}
              onPress={() => handlePress(tab.route)}
              activeHighlight={activeHighlight}
              inactiveText={inactiveText}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}

interface TabButtonProps {
  tab: {
    icon: string;
    label: string;
    route: string;
    library: string;
  };
  isActive: boolean;
  onPress: () => void;
  activeHighlight: string;
  inactiveText: string;
}

function TabButton({
  tab,
  isActive,
  onPress,
  activeHighlight,
  inactiveText,
}: TabButtonProps) {
  const color = isActive ? activeHighlight : inactiveText;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="items-center justify-center flex-1"
    >
      <View className="relative items-center justify-center w-12 h-12">
        <View className="items-center justify-center w-12 h-12">
          {tab.library === "feather" ? (
            <Feather name={tab.icon as any} size={24} color={color} />
          ) : (
            <MaterialCommunityIcons
              name={tab.icon as any
              size={26}
              color={color}
            />
          )}
        </View>
        {isActive && (
          <View
            className="w-5 h-[3px] rounded-sm mt-1"
            style={{ backgroundColor: activeHighlight }}
          />
        )}
      </View>

      <Text className="text-[11px] mt-0.5 font-semibold" style={{ color }}>
        {tab.label}
      </Text>
    </TouchableOpacity>
  );
}
