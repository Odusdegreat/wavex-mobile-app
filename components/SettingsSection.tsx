import React from "react";
import { Text, View } from "react-native";

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function SettingsSection({
  title,
  children,
}: SettingsSectionProps) {
  return (
    <View className="mt-6">
      <Text className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">
        {title}
      </Text>
      <View className="bg-white">{children}</View>
    </View>
  );
}
