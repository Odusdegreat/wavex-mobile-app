import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Polyline, Svg } from "react-native-svg";
// 1. IMPORT our new animation tool
import { useAnimatedCountUp } from "../app/hooks/useAnimatedCountUp";

// Helper function to get the number from "2.73 BTC"
const parseAmount = (amountStr: string) => {
  const value = parseFloat(amountStr.split(" ")[0]);
  const unit = amountStr.split(" ")[1] || "";
  return { value: value || 0, unit };
};

// Props from your PortfolioScreen
interface ChartItemProps {
  name: string;
  symbol: string;
  change: number;
  price: number;
  amount: string;
  icon: string;
  iconBg: string;
  chartColor: string;
  chartPoints: string;
  onPress: () => void;
}

export default function ChartItem(props: ChartItemProps) {
  const {
    name,
    change,
    price,
    amount,
    icon,
    iconBg,
    chartColor,
    chartPoints,
    onPress,
  } = props;

  // 2. USE the tool for all 3 numbers
  const animatedPrice = useAnimatedCountUp(price);
  const animatedChange = useAnimatedCountUp(change);

  const { value: amountValue, unit: amountUnit } = parseAmount(amount);
  const animatedAmount = useAnimatedCountUp(amountValue);

  const isPositive = change >= 0;

  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-2xl p-4 mx-4 mb-4 flex-row items-center"
      style={{
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
      }}
    >
      {/* Icon */}
      <View
        className="w-12 h-12 rounded-full items-center justify-center mr-3"
        style={{ backgroundColor: iconBg }}
      >
        <Text className="text-white text-2xl font-bold">{icon}</Text>
      </View>

      {/* Info */}
      <View className="flex-1">
        <Text className="text-base font-bold text-gray-900">{name}</Text>
        <Text className="text-sm text-gray-500">
          {/* 3. DISPLAY animated amount */}
          {animatedAmount.toFixed(2)} {amountUnit}
        </Text>
      </View>

      {/* Chart */}
      <View className="mx-2" style={{ width: 60, height: 40 }}>
        <Svg height="40" width="60">
          <Polyline
            points={chartPoints}
            fill="none"
            stroke={chartColor}
            strokeWidth="2"
          />
        </Svg>
      </View>

      {/* Price & Change */}
      <View className="items-end" style={{ minWidth: 90 }}>
        <Text className="text-base font-bold text-gray-900" numberOfLines={1}>
          {/* 3. DISPLAY animated price */}$
          {animatedPrice.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Text>
        <Text
          className={`text-sm font-semibold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {/* 3. DISPLAY animated change */}
          {animatedChange >= 0 ? "▲" : "▼"}{" "}
          {Math.abs(animatedChange).toFixed(2)}%
        </Text>
      </View>
    </TouchableOpacity>
  );
}
