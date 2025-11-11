import BottomNav from "@/components/BottomNav";
import ChartItem from "@/components/ChartItem";
import StatsCard from "@/components/StatsCard";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface CryptoChart {
  id: string;
  name: string;
  symbol: string;
  change: number;
  price: number;
  amount: string;
  icon: string;
  iconBg: string;
  chartColor: string;
  chartPoints: string;
}

export default function PortfolioScreen() {
  const [chartData] = useState<CryptoChart[]>([
    {
      id: "1",
      name: "Bitcoin",
      symbol: "BTC",
      change: 1.6,
      price: 29850.15,
      amount: "2.73 BTC",
      icon: "₿",
      iconBg: "#F7931A",
      chartColor: "#FF6B6B",
      chartPoints: "0,30 20,25 40,28 60,20 80,15",
    },
    {
      id: "2",
      name: "Ethereum",
      symbol: "ETH",
      change: -0.82,
      price: 10561.24,
      amount: "47.61 ETH",
      icon: "Ξ",
      iconBg: "#627EEA",
      chartColor: "#A78BFA",
      chartPoints: "0,20 20,18 40,15 60,17 80,12",
    },
    {
      id: "3",
      name: "Litecoin",
      symbol: "LTC",
      change: -2.19,
      price: 3676.78,
      amount: "39.27 LTC",
      icon: "Ł",
      iconBg: "#345D9D",
      chartColor: "#34D399",
      chartPoints: "0,15 20,20 40,25 60,22 80,28",
    },
    {
      id: "4",
      name: "Ripple",
      symbol: "XRP",
      change: 0.27,
      price: 5241.62,
      amount: "164.47 XRP",
      icon: "X",
      iconBg: "#23292F",
      chartColor: "#60A5FA",
      chartPoints: "0,25 20,22 40,20 60,18 80,15",
    },
  ]);

  const handleChartPress = (item: CryptoChart) => {
    console.log("Chart pressed:", item.symbol);
  };

  return (
    <View className="flex-1 bg-[#F5F7FA]">
      <StatusBar style="dark" />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 pt-12 pb-4">
          <TouchableOpacity
            className="w-10 h-10 rounded-full  items-center justify-center"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 4,
              elevation: 2,
            }}
          ></TouchableOpacity>

          <TouchableOpacity
            className="w-10 h-10 rounded-full items-center justify-center"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 4,
              elevation: 2,
            }}
          ></TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-4 mb-6"
          contentContainerStyle={{ paddingRight: 16 }}
        >
          <StatsCard
            icon="💸"
            count={17}
            label="Total transactions"
            variant="primary"
          />
          <TouchableOpacity
            className="bg-[#1E293B] rounded-2xl p-4 items-center justify-center mr-4"
            style={{ minWidth: 120 }}
          >
            <Feather
              name="send"
              size={24}
              color="#FFFFFF"
              style={{ marginBottom: 4 }}
            />
            <Text className="text-white text-sm font-semibold">Send</Text>
          </TouchableOpacity>
          <StatsCard icon="" count={70} label="Limit" variant="dark" />
        </ScrollView>

        {/* Charts Section */}
        <View className="flex-row items-center justify-between px-4 mb-4">
          <Text className="text-xl font-bold text-gray-900">Charts</Text>
          <TouchableOpacity>
            <Text className="text-sm font-semibold text-[#00F5A0]">
              See All
            </Text>
          </TouchableOpacity>
        </View>

        {/* Chart List */}
        <View>
          {chartData.map((item) => (
            <ChartItem
              key={item.id}
              {...item}
              onPress={() => handleChartPress(item)}
            />
          ))}
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}
