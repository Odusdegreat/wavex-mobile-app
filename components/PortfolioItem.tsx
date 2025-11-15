import type { Portfolio } from "@/types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

interface PortfolioItemProps {
  item: Portfolio;
  onPress?: () => void;
}

export default function PortfolioItem({ item, onPress }: PortfolioItemProps) {
  const { colors } = useTheme();
  const isPositive = item.change >= 0;

  const getIconBgColor = () => {
    const iconColors = {
      btc: "#F7931A",
      bnb: "#F3BA2F",
      eth: "#627EEA",
      xrp: "#23292F",
    };
    return iconColors[item.icon];
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
      style={{
        backgroundColor: colors.card,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
      className="flex-row items-center justify-between p-4 mx-4 mb-3 rounded-2xl"
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Left Section */}
      <View className="flex-row items-center">
        <View
          className="w-12 h-12 rounded-full items-center justify-center mr-3"
          style={{ backgroundColor: getIconBgColor() }}
        >
          <Text className="text-2xl text-white font-bold">{getIcon()}</Text>
        </View>
        <View>
          <Text
            style={{ color: colors.text }}
            className="text-base font-semibold mb-1"
          >
            {item.symbol}
          </Text>
          <Text style={{ color: colors.subtext }} className="text-[13px]">
            {item.name}
          </Text>
        </View>
      </View>

      {/* Right Section */}
      <View className="items-end">
        <Text
          style={{ color: colors.text }}
          className="text-base font-semibold mb-1"
        >
          $
          {item.price.toLocaleString("en-US", {
            minimumFractionDigits: item.price < 10 ? 4 : 2,
            maximumFractionDigits: item.price < 10 ? 4 : 2,
          })}
        </Text>
        <View
          className={`px-2.5 py-1 rounded-full ${
            isPositive ? "bg-[#00E5A0]/10" : "bg-red-500/10"
          }`}
        >
          <Text
            className={`text-xs font-bold ${
              isPositive ? "text-[#00E5A0]" : "text-red-500"
            }`}
          >
            {isPositive ? "▲" : "▼"} {Math.abs(item.change)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
