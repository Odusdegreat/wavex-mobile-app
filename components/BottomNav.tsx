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
import { useTheme } from "./../context/ThemeContext";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();

  const isDark = theme === "dark";

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

  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [pressedIndex, setPressedIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    const animations = scalesRef.current.map((val, i) =>
      Animated.spring(val, {
        toValue: i === selectedIndex ? 1.25 : 1,
        useNativeDriver: true,
        speed: 10,
        bounciness: 12,
      })
    );

    Animated.parallel(animations).start();
  }, [selectedIndex]);

  const handlePressIn = (index: number) => {
    setPressedIndex(index);

    Animated.timing(scalesRef.current[index], {
      toValue: 1.15,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (route: string, index: number) => {
    setPressedIndex(null);
    setSelectedIndex(index);
    router.push(route as any);
  };

  const bgColor = isDark ? "#0F172A" : "#FFFFFF"; // dark blue or white
  const activeHighlight = "#00E5A0"; // stays same in both modes
  const inactiveText = isDark ? "#64748B" : "#94A3B8"; // slate colors

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
          const isActive = selectedIndex === index;

          const color =
            isActive || pressedIndex === index ? activeHighlight : inactiveText;

          return (
            <TouchableWithoutFeedback
              key={tab.route}
              onPressIn={() => handlePressIn(index)}
              onPressOut={() => handlePressOut(tab.route, index)}
            >
              <Animated.View
                style={[
                  styles.tabItem,
                  {
                    transform: [{ scale: scalesRef.current[index] }],
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

                <Text style={[styles.tabLabel, { color }]}>{tab.label}</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
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
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    minWidth: 70,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "600",
  },
});
