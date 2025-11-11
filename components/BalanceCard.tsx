import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import ActionButton from "./ActionButton";

interface BalanceCardProps {
  balance?: number;
  changePercent?: number;
}

export default function BalanceCard({
  balance = 69032.69,
  changePercent = 20,
}: BalanceCardProps) {
  const handleDeposit = () => {
    console.log("Deposit pressed");
  };

  const handleWithdraw = () => {
    console.log("Withdraw pressed");
  };

  return (
    <View className="mx-4 mt-8 mb-4">
      <LinearGradient
        colors={["#00F5A0", "#00D68F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 24,
          padding: 24,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 12,
          elevation: 8,
        }}
      >
        {/* Header */}
        <View className="flex-row justify-between items-start mb-6">
          <View>
            <Text className="text-white/90 text-sm mb-1">Welcome to</Text>
            <Text className="text-white text-3xl font-bold">WaVex</Text>
          </View>
          <View className="bg-white/30 w-11 h-11 rounded-full items-center justify-center">
            <Text className="text-white text-lg">🔔</Text>
          </View>
        </View>

        {/* Balance Section */}
        <View className="mb-6">
          <Text className="text-white/90 text-sm mb-2">My Balance</Text>
          <View className="flex-row items-center">
            <Text className="text-white text-4xl font-bold mr-3">
              ${" "}
              {balance.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
            <View className="bg-white/30 px-3 py-1.5 rounded-full">
              <Text className="text-white text-xs font-bold">
                ▲ {changePercent}%
              </Text>
            </View>
          </View>
        </View>

        {/* White Container with Buttons */}
        <View className="bg-white rounded-2xl p-4">
          <View className="flex-row gap-3">
            <ActionButton
              title="Deposit INR"
              onPress={handleDeposit}
              variant="primary"
            />
            <ActionButton
              title="Withdraw INR"
              onPress={handleWithdraw}
              variant="secondary"
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
