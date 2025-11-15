import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useTheme } from "../context/ThemeContext"; // 1. Import useTheme

interface TimeFrameButtonProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

export default function TimeFrameButton({
  label,
  active,
  onPress,
}: TimeFrameButtonProps) {
  // 2. Get theme colors
  const { colors } = useTheme();

  // 3. Define colors based on theme
  // Active state uses brand colors (no change)
  const bgColor = active ? "#00E5A0" : colors.card; // Use theme bg
  const textColor = active ? "#FFFFFF" : colors.subtext; // Use theme text

  return (
    <TouchableOpacity
      // 4. Apply colors using the 'style' prop
      className="px-4 py-2 rounded-full"
      style={{ backgroundColor: bgColor }}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        // 4. Apply colors using the 'style' prop
        className="text-sm font-semibold"
        style={{ color: textColor }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
