import BottomNav from "@/components/BottomNav";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function PortfolioScreen() {
  return (
    <View className="flex-1 bg-[#F5F7FA] items-center justify-center">
      <StatusBar style="dark" />
      <Text className="text-2xl font-bold text-gray-900">Portfolio Screen</Text>
      <Text className="text-gray-500 mt-2">Coming soon...</Text>
      <BottomNav />
    </View>
  );
}
