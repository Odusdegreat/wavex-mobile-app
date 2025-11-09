import type { Portfolio } from "@/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface PortfolioItemProps {
  item: Portfolio;
  onPress?: () => void;
}

export default function PortfolioItem({ item, onPress }: PortfolioItemProps) {
  const isPositive = item.change >= 0;

  const getIconBgColor = () => {
    const colors = {
      btc: "bg-[#F7931A]",
      bnb: "bg-[#F3BA2F]",
      eth: "bg-[#627EEA]",
      xrp: "bg-[#23292F]",
    };
    return colors[item.icon];
  };

  const getIcon = () => {
    const icons = {
      btc: "₿",
      bnb: "B",
      eth: "Ξ",
      xrp: "X",
    };
    return icons[item.icon];
  };

  return (
    <TouchableOpacity
      className="flex-row justify-between items-center bg-white p-4 mx-4 mb-3 rounded-2xl shadow-sm"
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Left Section */}
      <View className="flex-row items-center">
        <View
          className={`w-11 h-11 rounded-full items-center justify-center mr-3 ${getIconBgColor()}`}
        >
          <Text className="text-2xl text-white font-bold">{getIcon()}</Text>
        </View>
        <View>
          <Text className="text-base font-semibold text-gray-900 mb-0.5">
            {item.symbol}
          </Text>
          <Text className="text-[13px] text-gray-500">{item.name}</Text>
        </View>
      </View>

      {/* Right Section */}
      <View className="items-end">
        <Text className="text-base font-semibold text-gray-900 mb-1">
          ${item.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </Text>
        <View
          className={`px-2 py-0.5 rounded-lg ${
            isPositive ? "bg-primary/10" : "bg-red-500/10"
          }`}
        >
          <Text
            className={`text-xs font-semibold ${
              isPositive ? "text-primary" : "text-red-500"
            }`}
          >
            {isPositive ? "▲" : "▼"} {Math.abs(item.change)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
