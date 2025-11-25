import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext"; // Check path (../)

interface MarketStatItemProps {
  icon?: React.ReactNode; // 1. Fixed: Optional ReactNode
  label: string;
  value: string;
  iconColor?: string; // 2. Fixed: Optional string
}

export default function MarketStatItem({
  icon,
  label,
  value,
  // 3. Provide a default fallback color in case it's undefined
  iconColor = "#94A3B8",
}: MarketStatItemProps) {
  const { colors } = useTheme();

  return (
    <View
      className="flex-row items-center justify-between py-4 border-b"
      style={{ borderBottomColor: colors.border }}
    >
      <View className="flex-row items-center">
        <View
          className="w-10 h-10 rounded-full items-center justify-center mr-3"
          // This is now safe because iconColor has a default value
          style={{ backgroundColor: `${iconColor}20` }}
        >
          {icon}
        </View>
        <Text className="text-base" style={{ color: colors.subtext }}>
          {label}
        </Text>
      </View>
      <Text className="text-base font-semibold" style={{ color: colors.text }}>
        {value}
      </Text>
    </View>
  );
}
