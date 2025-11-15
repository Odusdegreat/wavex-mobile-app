import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function SettingsSection({
  title,
  children,
}: SettingsSectionProps) {
  const { colors } = useTheme();

  return (
    <View className="mt-6">
      <Text
        style={{ color: colors.subtext }}
        className="text-xs font-semibold uppercase px-4 mb-2"
      >
        {title}
      </Text>
      <View style={{ backgroundColor: colors.card }}>{children}</View>
    </View>
  );
}
