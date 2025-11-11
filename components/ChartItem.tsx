import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Polyline } from 'react-native-svg';

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
  onPress?: () => void;
}

export default function ChartItem({
  name,
  symbol,
  change,
  price,
  amount,
  icon,
  iconBg,
  chartColor,
  chartPoints,
  onPress,
}: ChartItemProps) {
  const isPositive = change >= 0;

  return (
    <TouchableOpacity
      className="flex-row items-center justify-between bg-white p-4 mx-4 mb-3 rounded-2xl"
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      {/* Left: Icon + Info */}
      <View className="flex-row items-center flex-1">
        <View
          className="w-10 h-10 rounded-lg items-center justify-center mr-3"
          style={{ backgroundColor: iconBg }}
        >
          <Text className="text-white text-lg font-bold">{icon}</Text>
        </View>
        <View>
          <Text className="text-base font-bold text-gray-900">{symbol}</Text>
          <Text 
            className={`text-xs font-semibold ${
              isPositive ? 'text-[#00F5A0]' : 'text-red-500'
            }`}
          >
            {isPositive ? '+' : ''}{change.toFixed(2)}%
          </Text>
        </View>
      </View>

      {/* Middle: Chart */}
      <View className="mx-3">
        <Svg width="80" height="40" viewBox="0 0 80 40">
          <Polyline
            points={chartPoints}
            fill="none"
            stroke={chartColor}
            strokeWidth="2"
          />
        </Svg>
      </View>

      {/* Right: Price + Amount */}
      <View className="items-end">
        <Text className="text-base font-bold text-gray-900">
          ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </Text>
        <Text className="text-xs text-gray-500">{amount}</Text>
      </View>
    </TouchableOpacity>
  );
}