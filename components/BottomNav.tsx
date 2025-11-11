import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = React.useMemo(
    () => [
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
    ],
    []
  );

  const scalesRef = React.useRef<Animated.Value[]>([]);
  if (scalesRef.current.length === 0) {
    scalesRef.current = tabs.map(() => new Animated.Value(1));
  }

  // animate active tab
  React.useEffect(() => {
    const activeIndex = tabs.findIndex(
      (t) =>
        t.route === pathname ||
        (pathname === "/(tabs)" && t.route === "/(tabs)")
    );
    const animations = scalesRef.current.map((val, i) =>
      Animated.spring(val, {
        toValue: i === activeIndex ? 1.2 : 1,
        useNativeDriver: true,
        speed: 10,
        bounciness: 12,
      })
    );
    Animated.parallel(animations).start();
  }, [pathname, tabs]);

  const handlePress = (route: string, index: number) => {
    // animate on press
    Animated.sequence([
      Animated.timing(scalesRef.current[index], {
        toValue: 1.25,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(scalesRef.current[index], {
        toValue: 1.1,
        bounciness: 10,
        speed: 8,
        useNativeDriver: true,
      }),
    ]).start();

    router.push(route as any);
  };

  return (
    <View className="absolute bottom-0 left-0 right-0 z-50">
      <View
        className="flex-row justify-around items-center bg-white py-3"
        style={styles.shadow}
      >
        {tabs.map((tab, index) => {
          const active =
            pathname === tab.route ||
            (pathname === "/(tabs)" && tab.route === "/(tabs)");
          const iconColor = active ? "#00E5A0" : "#94A3B8";
          const textColor = active ? "#00E5A0" : "#94A3B8";
          const bgColor = active ? "rgba(0, 229, 160, 0.15)" : "transparent";

          return (
            <TouchableWithoutFeedback
              key={tab.route}
              onPress={() => handlePress(tab.route, index)}
            >
              <Animated.View
                className="items-center justify-center px-3 py-1 rounded-full"
                style={{
                  transform: [{ scale: scalesRef.current[index] }],
                  backgroundColor: bgColor,
                }}
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
                <Text
                  className="text-xs mt-1 font-medium"
                  style={{ color: textColor }}
                >
                  {tab.label}
                </Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 10,
  },
});
