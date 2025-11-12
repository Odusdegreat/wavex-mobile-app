import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface PaymentCardProps {
  type: "card" | "bank";
  title: string;
  number: string;
  isPrimary?: boolean;
  onPress?: () => void;
  onDelete?: () => void;
}

export default function PaymentCard({
  type,
  title,
  number,
  isPrimary,
  onPress,
  onDelete,
}: PaymentCardProps) {
  return (
    <TouchableOpacity className="mb-4" onPress={onPress} activeOpacity={0.7}>
      <LinearGradient
        colors={
          type === "card" ? ["#1E293B", "#334155"] : ["#00F5A0", "#00D68F"]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 16,
          padding: 16,
        }}
      >
        <View className="flex-row items-center justify-between mb-3">
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name={type === "card" ? "credit-card" : "bank"}
              size={24}
              color="#FFFFFF"
            />
            <Text className="text-white text-base font-semibold ml-2">
              {title}
            </Text>
          </View>
          <TouchableOpacity onPress={onDelete}>
            <Feather name="trash-2" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <Text className="text-white/80 text-sm mb-2">{number}</Text>

        {isPrimary && (
          <View className="bg-white/20 self-start px-3 py-1 rounded-full">
            <Text className="text-white text-xs font-semibold">Primary</Text>
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}
