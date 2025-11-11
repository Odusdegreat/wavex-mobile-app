import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface StatsCardProps {
  icon: string;
  count: number;
  label: string;
  variant?: "primary" | "dark";
}

export default function StatsCard({
  icon,
  count,
  label,
  variant = "primary",
}: StatsCardProps) {
  if (variant === "primary") {
    return (
      <View className="mr-4">
        <LinearGradient
          colors={["#00F5A0", "#00D68F"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            borderRadius: 20,
            padding: 16,
            minWidth: 140,
          }}
        >
          <Text className="text-2xl mb-1">{icon}</Text>
          <Text className="text-white text-2xl font-bold mb-1">{count}</Text>
          <Text className="text-white/80 text-xs">{label}</Text>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View
      className="bg-[#1E293B] rounded-2xl p-4 items-center justify-center"
      style={{ minWidth: 140 }}
    >
      <Text className="text-[#00F5A0] text-4xl font-bold mb-1">70%</Text>
      <Text className="text-gray-400 text-xs">Limit</Text>
    </View>
  );
}
