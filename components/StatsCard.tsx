import React from "react";
import { Text, View } from "react-native";
// 1. IMPORT our new animation tool
import { useAnimatedCountUp } from "../app/hooks/useAnimatedCountUp";

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
  variant,
}: StatsCardProps) {
  // 2. USE the tool to animate the 'count' prop
  const animatedCount = useAnimatedCountUp(count);

  const isPrimary = variant === "primary";
  const bgColor = isPrimary ? "bg-[#00F5A0]" : "bg-[#1E293B]";
  const textColor = "text-white";

  return (
    <View
      className={`${bgColor} rounded-2xl p-4 mr-4`}
      style={{ minWidth: 120 }}
    >
      {!!icon && <Text className="text-2xl mb-2">{icon}</Text>}
      <Text className={`${textColor} text-3xl font-bold mb-1`}>
        {/* 3. DISPLAY the animated number (using toFixed(0) to remove decimals) */}
        {animatedCount.toFixed(0)}
      </Text>
      <Text className={`${textColor} text-sm font-semibold`}>{label}</Text>_
    </View>
  );
}
