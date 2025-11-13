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

  // State to track which tab is currently being pressed down
  const [pressedIndex, setPressedIndex] = React.useState<number | null>(null);

  // Animate active tab
  React.useEffect(() => {
    const activeIndex = tabs.findIndex(
      (t) =>
        t.route === pathname ||
        (pathname === "/(tabs)" && t.route === "/(tabs)")
    );
    const animations = scalesRef.current.map((val, i) =>
      Animated.spring(val, {
        toValue: i === activeIndex ? 1.2 : 1, // Active tab scales up
        useNativeDriver: true,
        speed: 10,
        bounciness: 12,
      })
    );
    Animated.parallel(animations).start();
  }, [pathname, tabs]);

  const handlePressIn = (index: number) => {
    setPressedIndex(index);
    // Animate scale up slightly on press
    Animated.timing(scalesRef.current[index], {
      toValue: 1.15,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (route: string, index: number) => {
    setPressedIndex(null); // Clear pressed state

    // Navigate immediately. The useEffect will handle the "active" animation.
    router.push(route as any);
  };

  return (
    <View className="absolute bottom-0 left-0 right-0 z-50 ">
      <View
        className="flex-row justify-around items-center bg-white py-3"
        style={styles.shadow}
      >
        {tabs.map((tab, index) => {
          const active =
            pathname === tab.route ||
            (pathname === "/(tabs)" && tab.route === "/(tabs)");

          // --- Define Colors ---
          const baseColor = "#94A3B8";
          const activeColor = "#00E5A0";

          // Use activeColor if active OR if it's currently being pressed
          const color =
            active || pressedIndex === index ? activeColor : baseColor;

          return (
            <TouchableWithoutFeedback
              key={tab.route}
              onPressIn={() => handlePressIn(index)}
              onPressOut={() => handlePressOut(tab.route, index)}
            >
              <Animated.View
                className="items-center justify-center px-3 py-1 rounded-full"
                style={{
                  transform: [{ scale: scalesRef.current[index] }],
                  backgroundColor: "transparent", // Background is always transparent
                }}
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
                <Text
                  className="text-xs mt-1 font-medium"
                  style={{ color: color }}
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
