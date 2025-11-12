import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ActionButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  isActive?: boolean;
}

function ActionButton({
  title,
  onPress,
  variant = "primary",
  isActive = false,
}: ActionButtonProps) {
  return (
    <TouchableOpacity
      className={`flex-1 py-3.5 px-4 rounded-xl items-center justify-center ${
        isActive ? "bg-[#00E5A0]" : "bg-white border-2 border-[#00E5A0]"
      }`}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        className={`text-[15px] font-semibold ${
          isActive ? "text-white" : "text-[#00E5A0]"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

// Export this component to use in BalanceCard
export default function ActionButtons() {
  const [activeButton, setActiveButton] = useState<
    "deposit" | "withdraw" | null
  >(null);

  const handleDeposit = () => {
    setActiveButton("deposit");
    console.log("Deposit pressed");
  };

  const handleWithdraw = () => {
    setActiveButton("withdraw");
    console.log("Withdraw pressed");
  };

  return (
    <View className="flex-row gap-3">
      <ActionButton
        title="Deposit INR"
        onPress={handleDeposit}
        isActive={activeButton === "deposit"}
      />
      <ActionButton
        title="Withdraw INR"
        onPress={handleWithdraw}
        isActive={activeButton === "withdraw"}
      />
    </View>
  );
}
