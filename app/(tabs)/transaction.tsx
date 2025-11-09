import BottomNav from "@/components/BottomNav";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function TransactionsScreen() {
  return (
    <View className="flex-1 bg-secondary items-center justify-center">
      <StatusBar style="dark" />
      <Text className="text-2xl font-bold text-gray-900">
        Transactions Screen
      </Text>
      <BottomNav />
    </View>
  );
}
