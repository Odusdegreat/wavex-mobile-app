import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

interface MarketStatItemProps {
  // Accepts a React component (the icon itself)
  icon?: React.ReactNode;
  label: string;
  value: string;
  // Optional string, used for color fallback
  iconColor?: string;
}

export default function MarketStatItem({
  icon,
  label,
  value,
  // Fallback color is applied if none is provided
  iconColor = "#94A3B8",
}: MarketStatItemProps) {
  const { colors } = useTheme();

  return (
    <View
      className="flex-row items-center justify-between py-4 border-b"
      // Applies theme-based border color
      style={{ borderBottomColor: colors.border }}
    >
      <View className="flex-row items-center">
        <View
          className="w-10 h-10 rounded-full items-center justify-center mr-3"
          // Uses the iconColor prop to create a tinted background
          style={{ backgroundColor: `${iconColor}20` }}
        >
          {/* Renders the icon component passed via props */}
          {icon}
        </View>
        <Text
          className="text-base"
          // Applies secondary text color for the label
          style={{ color: colors.text }}
        >
          {label}
        </Text>
      </View>
      <Text
        className="text-base font-semibold"
        // Applies primary text color for the value
        style={{ color: colors.text }}
      >
        {value}
      </Text>
    </View>
  );
}
