import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface MarketStatItemProps {
  icon: string;
  label: string;
  value: string;
  iconColor: string;
}

export default function MarketStatItem({
  icon,
  label,
  value,
  iconColor,
}: MarketStatItemProps) {
  return (
    <View className="flex-row items-center justify-between py-4 border-b border-gray-100">
      <View className="flex-row items-center">
        <View
          className="w-10 h-10 rounded-full items-center justify-center mr-3"
          style={{ backgroundColor: `${iconColor}20` }}
        >
          <MaterialCommunityIcons
            name={icon as any}
            size={20}
            color={iconColor}
          />
        </View>
        <Text className="text-base text-gray-700">{label}</Text>
      </View>
      <Text className="text-base font-semibold text-gray-900">{value}</Text>
    </View>
  );
}
