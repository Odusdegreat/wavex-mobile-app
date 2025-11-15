import BalanceCard from "@/components/BalanceCard";
import BottomNav from "@/components/BottomNav";
import type { Portfolio } from "@/types";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import PortfolioItem from "../../components/PortfolioItem";
import { useTheme } from "../../context/ThemeContext";

export default function HomeScreen() {
  // 1. Theme variables are already available
  const { isDark, colors } = useTheme();

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
    // 2. Apply theme background color
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* 3. Toggle status bar style */}
      <StatusBar style={isDark ? "light" : "dark"} />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* BalanceCard assumes internal theming */}
        <BalanceCard />

        {/* Portfolio Header */}
        <View className="flex-row justify-between items-center px-4 mb-4 mt-2">
          {/* 4. Apply theme text color */}
          <Text style={{ color: colors.text }} className="text-xl font-bold">
            My portfolio
          </Text>
          <TouchableOpacity activeOpacity={0.7}>
            {/* Brand color remains the same */}
            <Text className="text-sm font-semibold text-[#00E5A0]">
              See all
            </Text>
          </TouchableOpacity>
        </View>

        {/* Portfolio List */}
        {/* PortfolioItem assumes internal theming */}
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

      {/* BottomNav assumes internal theming */}
      <BottomNav />
    </View>
  );
}
