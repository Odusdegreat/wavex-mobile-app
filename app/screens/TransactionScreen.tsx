import ButtomNav from "@/components/BottomNav";
import MarketStatItem from "@/components/MarketStatItem";
import TimeFrameButton from "@/components/TimeFrameButton";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "../../context/ThemeContext";

export default function CryptoDetailScreen() {
  const { colors } = useTheme();

  const [selectedTimeFrame, setSelectedTimeFrame] = useState("1H");

  const timeFrames = ["1H", "24 H", "1 W", "1 M", "6 M", "1 Y", "All"];

  // FULL Market Stats (Restored)
  type MarketStat = {
    icon: React.ReactNode;
    label: string;
    value: string | number;
    iconColor?: string;
  };

  const marketStats: MarketStat[] = [
    {
      icon: <Feather name="activity" size={18} color="#3B82F6" />,
      label: "Market Cap",
      value: "₹1.57T",
      iconColor: "#3B82F6",
    },
    {
      icon: <Feather name="trending-up" size={18} color="#10B981" />,
      label: "24h Volume",
      value: "₹428.9B",
      iconColor: "#10B981",
    },
    {
      icon: <Feather name="bar-chart-2" size={18} color="#F59E0B" />,
      label: "Circulating Supply",
      value: "19,345,200 BTC",
      iconColor: "#F59E0B",
    },
    {
      icon: <Feather name="clock" size={18} color="#EF4444" />,
      label: "All-Time High",
      value: "₹5,624,000",
      iconColor: "#EF4444",
    },
    {
      icon: <Feather name="trending-down" size={18} color="#8B5CF6" />,
      label: "24h Low",
      value: "₹92,400",
      iconColor: "#8B5CF6",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style="auto" />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* HEADER */}
        <View
          className="px-4 pb-4"
          style={{
            backgroundColor: colors.card,
            paddingTop: Platform.OS === "ios" ? 70 : 16,
          }}
        >
          {/* Top Right Buttons */}
          <View className="flex-row items-center justify-between mb-4">
            <TouchableOpacity></TouchableOpacity>

            <View className="flex-row items-center">
              <TouchableOpacity className="mr-3">
                <Feather name="star" size={20} color={colors.subtext} />
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
            <Text className="text-xl font-bold" style={{ color: colors.text }}>
              Bitcoin
            </Text>
            <Text className="text-sm ml-2" style={{ color: colors.subtext }}>
              (BTC)
            </Text>
          </View>

          {/* Price */}
          <View className="mb-1">
            <Text className="text-3xl font-bold" style={{ color: colors.text }}>
              ₹98,509.75
            </Text>
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
        <View
          className="mt-2 px-4 py-6"
          style={{ backgroundColor: colors.card }}
        >
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
            {["DEC 15", "DEC 24", "JAN 02", "JAN 11", "JAN 20"].map((d) => (
              <Text
                key={d}
                className="text-xs"
                style={{ color: colors.subtext }}
              >
                {d}
              </Text>
            ))}
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
        <View
          className="mt-2 px-4 py-4"
          style={{ backgroundColor: colors.card }}
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-[#F7931A] rounded-full items-center justify-center mr-3">
                <Text className="text-white text-lg font-bold">₿</Text>
              </View>
              <View>
                <Text
                  className="text-base font-semibold"
                  style={{ color: colors.text }}
                >
                  Bitcoin
                </Text>
                <Text className="text-xs" style={{ color: colors.subtext }}>
                  00.00 BTC
                </Text>
              </View>
            </View>

            <View className="items-end">
              <Text
                className="text-base font-semibold"
                style={{ color: colors.text }}
              >
                ₹00.00
              </Text>
              <Text className="text-xs" style={{ color: colors.subtext }}>
                00.00%
              </Text>
            </View>
          </View>
        </View>

        {/* Transactions Button */}
        <TouchableOpacity
          className="mt-2 px-4 py-4 flex-row items-center justify-between"
          style={{ backgroundColor: colors.card }}
          activeOpacity={0.7}
        >
          <Text
            className="text-base font-semibold"
            style={{ color: colors.text }}
          >
            Transactions
          </Text>
          <Feather name="chevron-right" size={20} color={colors.subtext} />
        </TouchableOpacity>

        {/* Market Stats */}
        <View
          className="mt-2 px-4 py-4"
          style={{ backgroundColor: colors.card }}
        >
          <Text
            className="text-lg font-bold mb-4"
            style={{ color: colors.text }}
          >
            Market Stats
          </Text>

          {marketStats.map((stat, index) => (
            <MarketStatItem
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={String(stat.value)}
              iconColor={stat.iconColor}
            />
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <ButtomNav />
    </View>
  );
}
