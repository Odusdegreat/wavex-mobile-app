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
    <View className="bg-[#0DF076] rounded-3xl p-6 mx-4 mt-4 mb-3">
      {/* Header */}
      <View className="flex-row justify-between items-start mb-5">
        <View>
          <Text className="text-white text-sm opacity-90">Welcome to</Text>
          <Text className="text-white text-3xl font-bold mt-0.5">Wavex</Text>
        </View>
        <View className="bg-white/20 w-10 h-10 rounded-full items-center justify-center">
          <Text className="text-xl">🔔</Text>
        </View>
      </View>

      {/* Balance Section */}
      <View className="mb-5">
        <Text className="text-white text-[13px] opacity-85 mb-1.5">
          My Balance
        </Text>
        <View className="flex-row items-center">
          <Text className="text-white text-[32px] font-bold mr-3">
            ${" "}
            {balance.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
          <View className="bg-white/25 px-2.5 py-1 rounded-xl">
            <Text className="text-white text-xs font-semibold">
              ▲ {changePercent}%
            </Text>
          </View>
        </View>
      </View>

      {/* White Container with Buttons */}
      <View className="bg-white rounded-2xl p-4 shadow-sm">
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
    </View>
  );
}
