import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ActionButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}

export default function ActionButton({
  title,
  onPress,
  variant = "primary",
}: ActionButtonProps) {
  return (
    <TouchableOpacity
      className={`flex-1 py-3.5 px-4 rounded-xl items-center justify-center ${
        variant === "primary"
          ? "bg-[#00E5A0]"
          : "bg-white border-2 border-[#00E5A0]"
      }`}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        className={`text-[15px] font-semibold ${
          variant === "primary" ? "text-white" : "text-[#00E5A0]"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
