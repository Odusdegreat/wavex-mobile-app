import React from "react";
import { Text, TouchableOpacity } from "react-native";

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
  return (
    <TouchableOpacity
      className={`px-4 py-2 rounded-full ${
        active ? "bg-[#00E5A0]" : "bg-gray-100"
      }`}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        className={`text-sm font-semibold ${
          active ? "text-white" : "text-gray-600"
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
