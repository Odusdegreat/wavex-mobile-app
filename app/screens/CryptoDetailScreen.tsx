import ButtomNav from "@/components/BottomNav";
import MarketStatItem from "@/components/MarketStatItem";
import TimeFrameButton from "@/components/TimeFrameButton";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function CryptoDetailScreen() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("1H");

  const timeFrames = ["1H", "24 H", "1 W", "1 M", "6 M", "1 Y", "All"];

  const marketStats = [
    {
      icon: "chart-line",
      label: "Market Cap",
      value: "₹19.8 trillion",
      iconColor: "#3B82F6",
    },
    {
      icon: "chart-bar",
      label: "Volume",
      value: "₹4.1 trillion",
      iconColor: "#8B5CF6",
    },
    {
      icon: "bitcoin",
      label: "Circulating Supply",
      value: "116.0 million",
      iconColor: "#F59E0B",
    },
    {
      icon: "star",
      label: "Popularity",
      value: "#2",
      iconColor: "#EF4444",
    },
  ];

  return (
    <View className="flex-1 bg-[#F5F7FA]">
      <StatusBar style="dark" />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}
        <View className="bg-white px-4 pt-12 pb-4">
          <View className="flex-row items-center justify-between mb-4">
            <TouchableOpacity></TouchableOpacity>

            <View className="flex-row items-center">
              <TouchableOpacity className="mr-3">
                <Feather name="star" size={20} color="#94A3B8" />
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-[#00E5A0] px-4 py-2 rounded-full"
                activeOpacity={0.7}
              >
                <Text className="text-white text-sm font-semibold">
                  Exchange
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Crypto Info */}
          <View className="flex-row items-center mb-2">
            <View className="w-10 h-10 bg-[#F7931A] rounded-full items-center justify-center mr-3">
              <Text className="text-white text-xl font-bold">₿</Text>
            </View>
            <Text className="text-xl font-bold text-gray-900">Bitcoin</Text>
            <Text className="text-sm text-gray-500 ml-2">(BTC)</Text>
          </View>

          {/* Price */}
          <View className="mb-1">
            <Text className="text-3xl font-bold text-gray-900">₹98,509.75</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-[#00E5A0] text-sm font-semibold mr-1">
              ▲ ₹700,254
            </Text>
            <Text className="text-[#00E5A0] text-sm font-semibold">
              (9.77%)
            </Text>
          </View>
        </View>

        {/* Chart */}
        <View className="bg-white mt-2 px-4 py-6">
          <View className="h-48 mb-4">
            <Svg width="100%" height="100%" viewBox="0 0 300 180">
              <Path
                d="M 0,120 L 20,100 L 40,80 L 60,100 L 80,90 L 100,110 L 120,100 L 140,70 L 160,80 L 180,50 L 200,60 L 220,40 L 240,30 L 260,50 L 280,20 L 300,40"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
              />
            </Svg>
          </View>

          {/* Time Labels */}
          <View className="flex-row justify-between mb-4">
            <Text className="text-xs text-gray-500">DEC 15</Text>
            <Text className="text-xs text-gray-500">DEC 24</Text>
            <Text className="text-xs text-gray-500">JAN 02</Text>
            <Text className="text-xs text-gray-500">JAN 11</Text>
            <Text className="text-xs text-gray-500">JAN 20</Text>
          </View>

          {/* Time Frame Buttons */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8 }}
          >
            {timeFrames.map((tf) => (
              <TimeFrameButton
                key={tf}
                label={tf}
                active={selectedTimeFrame === tf}
                onPress={() => setSelectedTimeFrame(tf)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Holdings */}
        <View className="bg-white mt-2 px-4 py-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-[#F7931A] rounded-full items-center justify-center mr-3">
                <Text className="text-white text-lg font-bold">₿</Text>
              </View>
              <View>
                <Text className="text-base font-semibold text-gray-900">
                  Bitcoin
                </Text>
                <Text className="text-xs text-gray-500">00.00 BTC</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-base font-semibold text-gray-900">
                ₹00.00
              </Text>
              <Text className="text-xs text-gray-500">00.00%</Text>
            </View>
          </View>
        </View>

        {/* Transactions Button */}
        <TouchableOpacity
          className="bg-white mt-2 px-4 py-4 flex-row items-center justify-between"
          activeOpacity={0.7}
        >
          <Text className="text-base font-semibold text-gray-900">
            Transactions
          </Text>
          <Feather name="chevron-right" size={20} color="#94A3B8" />
        </TouchableOpacity>

        {/* Market Stats */}
        <View className="bg-white mt-2 px-4 py-4">
          <Text className="text-lg font-bold text-gray-900 mb-4">
            Market Stats
          </Text>
          {marketStats.map((stat, index) => (
            <MarketStatItem
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              iconColor={stat.iconColor}
            />
          ))}
        </View>
      </ScrollView>
      <ButtomNav />
    </View>
  );
}
