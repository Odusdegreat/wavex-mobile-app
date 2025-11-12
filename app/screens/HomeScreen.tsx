import BalanceCard from "@/components/BalanceCard";
import BottomNav from "@/components/BottomNav";
import PortfolioItem from "@/components/PortfolioItem";
import type { Portfolio } from "@/types";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [portfolioData] = useState<Portfolio[]>([
    {
      id: "1",
      symbol: "BTC/BUSD",
      name: "Bitcoin",
      price: 54382.64,
      change: 15,
      icon: "btc",
    },
    {
      id: "2",
      symbol: "BNB/BUSD",
      name: "Binance Coin",
      price: 610.5,
      change: -2.3,
      icon: "bnb",
    },
    {
      id: "3",
      symbol: "ETH/BUSD",
      name: "Etherium",
      price: 4145.61,
      change: -2.1,
      icon: "eth",
    },
    {
      id: "4",
      symbol: "XRP/BUSD",
      name: "Ripple",
      price: 1.0358,
      change: 15.8,
      icon: "xrp",
    },
  ]);

  const handlePortfolioPress = (item: Portfolio) => {
    console.log("Portfolio item pressed:", item.symbol);
  };

  return (
    <View className="flex-1 bg-[#F5F7FA]">
      <StatusBar style="dark" />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <BalanceCard />

        {/* Portfolio Header */}
        <View className="flex-row justify-between items-center px-4 mb-4 mt-2">
          <Text className="text-xl font-bold text-gray-900">My Portfolio</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text className="text-sm font-semibold text-[#00E5A0]">
              See all
            </Text>
          </TouchableOpacity>
        </View>

        {/* Portfolio List */}
        <View>
          {portfolioData.map((item) => (
            <PortfolioItem
              key={item.id}
              item={item}
              onPress={() => handlePortfolioPress(item)}
            />
          ))}
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}
