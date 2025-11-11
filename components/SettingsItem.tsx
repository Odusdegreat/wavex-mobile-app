import { Feather } from "@expo/vector-icons";
import React from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

interface SettingsItemProps {
  icon: string;
  title: string;
  subtitle?: string;
  showArrow?: boolean;
  showSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  onPress?: () => void;
  iconBg?: string;
  iconColor?: string;
}

export default function SettingsItem({
  icon,
  title,
  subtitle,
  showArrow = true,
  showSwitch = false,
  switchValue = false,
  onSwitchChange,
  onPress,
  iconBg = "#F3F4F6",
  iconColor = "#6B7280",
}: SettingsItemProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between px-4 py-4 bg-white"
      onPress={onPress}
      activeOpacity={showSwitch ? 1 : 0.7}
      disabled={showSwitch}
    >
      <View className="flex-row items-center flex-1">
        <View
          className="w-10 h-10 rounded-full items-center justify-center mr-3"
          style={{ backgroundColor: iconBg }}
        >
          <Feather name={icon as any} size={20} color={iconColor} />
        </View>
        <View className="flex-1">
          <Text className="text-base font-semibold text-gray-900">{title}</Text>
          {subtitle && (
            <Text className="text-sm text-gray-500 mt-0.5">{subtitle}</Text>
          )}
        </View>
      </View>

      {showSwitch ? (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{ false: "#E5E7EB", true: "#00E5A0" }}
          thumbColor="#FFFFFF"
        />
      ) : showArrow ? (
        <Feather name="chevron-right" size={20} color="#9CA3AF" />
      ) : null}
    </TouchableOpacity>
  );
}
