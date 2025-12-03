import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "./../context/ThemeContext";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();
  const [clickedTabs, setClickedTabs] = useState<Set<string>>(new Set());

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

  const handlePress = (route: string) => {
    // Add the clicked route to the set
    setClickedTabs((prev) => new Set(prev).add(route));
    router.push(route as any);
  };

  const bgColor = isDark ? "#0F172A" : "#FFFFFF";
  const activeHighlight = "#00E5A0";
  const inactiveText = isDark ? "#64748B" : "#94A3B8";

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <View
        style={[
          styles.navContainer,
          {
            backgroundColor: bgColor,
          },
        ]}
      >
        {tabs.map((tab) => {
          const hasBeenClicked = clickedTabs.has(tab.route);
          const color = hasBeenClicked ? activeHighlight : inactiveText;

          return (
            <TouchableOpacity
              key={tab.route}
              onPress={() => handlePress(tab.route)}
              activeOpacity={0.7}
              style={styles.tabContainer}
            >
              <View style={styles.tabWrapper}>
                <View style={styles.iconContainer}>
                  {tab.library === "feather" ? (
                    <Feather name={tab.icon as any} size={24} color={color} />
                  ) : (
                    <MaterialCommunityIcons
                      name={tab.icon as any}
                      size={26}
                      color={color}
                    />
                  )}
                </View>
              </View>

              <Text style={[styles.tabLabel, { color }]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: Platform.OS === "ios" ? 5 : 10,
    height: 70,
    borderTopWidth: 0.4,
    borderTopColor: "rgba(0,0,0,0.1)",
  },

  tabContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  tabWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
  },

  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
  },

  tabLabel: {
    fontSize: 11,
    marginTop: 3,
    fontWeight: "600",
  },
});

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();
  const [clickedTabs, setClickedTabs] = useState<Set<string>>(new Set());

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

  const handlePress = (route: string) => {
    // Add the clicked route to the set
    setClickedTabs((prev) => new Set(prev).add(route));
    router.push(route as any);
  };

  const bgColor = isDark ? "#0F172A" : "#FFFFFF";
  const activeHighlight = "#00E5A0";
  const inactiveText = isDark ? "#64748B" : "#94A3B8";

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <View
        style={[
          styles.navContainer,
          {
            backgroundColor: bgColor,
          },
        ]}
      >
        {tabs.map((tab) => {
          const hasBeenClicked = clickedTabs.has(tab.route);
          const color = hasBeenClicked ? activeHighlight : inactiveText;

          return (
            <TouchableOpacity
              key={tab.route}
              onPress={() => handlePress(tab.route)}
              activeOpacity={0.7}
              style={styles.tabContainer}
            >
              <View style={styles.tabWrapper}>
                <View style={styles.iconContainer}>
                  {tab.library === "feather" ? (
                    <Feather name={tab.icon as any} size={24} color={color} />
                  ) : (
                    <MaterialCommunityIcons
                      name={tab.icon as any}
                      size={26}
                      color={color}
                    />
                  )}
                </View>
              </View>

              <Text style={[styles.tabLabel, { color }]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: Platform.OS === "ios" ? 5 : 10,
    height: 70,
    borderTopWidth: 0.4,
    borderTopColor: "rgba(0,0,0,0.1)",
  },

  tabContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  tabWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
  },

  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
  },

  tabLabel: {
    fontSize: 11,
    marginTop: 3,
    fontWeight: "600",
  },
});
