import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProfileCard() {
  return (
    <View className="mx-4 mt-6 mb-4">
      <LinearGradient
        colors={["#00F5A0", "#00D68F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 20,
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 12,
          elevation: 8,
        }}
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="w-16 h-16 bg-white/30 rounded-full items-center justify-center mr-4">
              <Text className="text-white text-2xl font-bold">JD</Text>
            </View>
            <View>
              <Text className="text-white text-xl font-bold mb-1">
                John Doe
              </Text>
              <Text className="text-white/80 text-sm">john.doe@email.com</Text>
            </View>
          </View>
          <TouchableOpacity
            className="w-10 h-10 bg-white/30 rounded-full items-center justify-center"
            activeOpacity={0.7}
          >
            <Feather name="edit-2" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View className="flex-row mt-6 gap-4">
          <View className="flex-1 bg-white/20 rounded-xl p-3">
            <Text className="text-white/80 text-xs mb-1">Total Balance</Text>
            <Text className="text-white text-lg font-bold">₹1.2M</Text>
          </View>
          <View className="flex-1 bg-white/20 rounded-xl p-3">
            <Text className="text-white/80 text-xs mb-1">Total Profit</Text>
            <Text className="text-white text-lg font-bold">+12.5%</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
