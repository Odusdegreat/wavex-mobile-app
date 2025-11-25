import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
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

  const getActiveIndex = () =>
    tabs.findIndex((tab) => pathname.startsWith(tab.route));

  const activeIndex = getActiveIndex();

  const handlePress = (route: string) => {
    router.push(route as any);
  };

  const bgColor = isDark ? "#0F172A" : "#FFFFFF";
  const activeHighlight = "#00E5A0";
  const inactiveText = isDark ? "#64748B" : "#94A3B8";

  return (
    <View className="absolute bottom-0 left-0 right-0 z-50">
      <View
        style={[
          styles.navContainer,
          {
            backgroundColor: bgColor,
          },
        ]}
      >
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          const color = isActive ? activeHighlight : inactiveText;

          return (
            <TabItem
              key={tab.route}
              tab={tab}
              isActive={isActive}
              color={color}
              activeHighlight={activeHighlight}
              onPress={() => handlePress(tab.route)}
            />
          );
        })}
      </View>
    </View>
  );
}

interface TabItemProps {
  tab: {
    icon: string;
    label: string;
    route: string;
    library: string;
  };
  isActive: boolean;
  color: string;
  activeHighlight: string;
  onPress: () => void;
}

function TabItem({
  tab,
  isActive,
  color,
  activeHighlight,
  onPress,
}: TabItemProps) {
  const pulse = useSharedValue(0);

  // --- 🔥 Glow Pulse Animation (From first code) ---
  const glowStyle = useAnimatedStyle(() => {
    if (!isActive) {
      return {
        opacity: 0,
        transform: [{ scale: 1 }],
      };
    }
    return {
      opacity: withRepeat(withTiming(0, { duration: 1200 }), -1, false),
      transform: [
        {
          scale: withRepeat(withTiming(1.8, { duration: 1200 }), -1, false),
        },
      ],
    };
  }, [isActive]);

  // --- Icon Scale Animation ---
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(isActive ? 1.25 : 1, { duration: 200 }) }],
  }));

  // Trigger pulse on press-in only
  const handlePressIn = () => {
    pulse.value++;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      activeOpacity={0.7}
      style={styles.tabContainer}
    >
      <View style={styles.tabWrapper}>
        {/* 🔥 Pulsing Glow Behind Icon */}
        <Animated.View
          style={[
            glowStyle,
            {
              position: "absolute",
              width: 50,
              height: 50,
              borderRadius: 30,
              backgroundColor: activeHighlight,
            },
          ]}
        />

        {/* 🔥 Icon Container with green background on active */}
        <Animated.View
          style={[
            iconStyle,
            styles.iconContainer,
            {
              backgroundColor: isActive
                ? "rgba(0,229,160,0.15)"
                : "transparent",
            },
          ]}
        >
          {tab.library === "feather" ? (
            <Feather name={tab.icon as any} size={24} color={color} />
          ) : (
            <MaterialCommunityIcons
              name={tab.icon as any}
              size={26}
              color={color}
            />
          )}
        </Animated.View>
      </View>

      {/* Label */}
      <Text style={[styles.tabLabel, { color }]}>{tab.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 10,
  },
  tabContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 28,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "600",
  },
});
