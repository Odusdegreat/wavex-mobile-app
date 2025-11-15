import BottomNav from "@/components/BottomNav";
import ChartItem from "@/components/ChartItem";
import StatsCard from "@/components/StatsCard";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext"; // 1. Import useTheme

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
  // 2. Get theme colors and mode
  const theme = useTheme();
  const colors = theme.colors;
  const isDarkMode = (theme as any).isDarkMode ?? false;

  const [chartData] = useState<CryptoChart[]>([
    // ... (no changes needed in this array)
  ]);

  const handleChartPress = (item: CryptoChart) => {
    console.log("Chart pressed:", item.symbol);
  };

  return (
    // 3. Apply background color from theme
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* 4. Toggle status bar based on theme */}
      <StatusBar style={isDarkMode ? "light" : "dark"} />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 pt-12 pb-4">
          <TouchableOpacity
            className="w-10 h-10 rounded-full items-center justify-center"
            // 5. Theme the header button
            style={{
              backgroundColor: colors.card,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: isDarkMode ? 0 : 0.05, // Hide shadow in dark mode
              shadowRadius: 4,
              elevation: isDarkMode ? 0 : 2,
            }}
          >
            {/* You'll probably want an icon here, e.g., <Feather name="search" size={20} color={colors.text} /> */}
          </TouchableOpacity>

          <TouchableOpacity
            className="w-10 h-10 rounded-full items-center justify-center"
            // 5. Theme the header button
            style={{
              backgroundColor: colors.card,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: isDarkMode ? 0 : 0.05, // Hide shadow in dark mode
              shadowRadius: 4,
              elevation: isDarkMode ? 0 : 2,
            }}
          >
            {/* You'll probably want an icon here, e.g., <Feather name="bell" size={20} color={colors.text} /> */}
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-4 mb-6"
          contentContainerStyle={{ paddingRight: 16 }}
        >
          {/* 6. NOTE: 'StatsCard.tsx' MUST be themed internally */}
          <StatsCard
            icon="💸"
            count={17}
            label="Total transactions"
            variant="primary"
          />
          {/* This 'Send' card is dark, so it will look fine on both themes */}
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
          {/* 6. NOTE: 'StatsCard.tsx' MUST be themed internally */}
          <StatsCard icon="" count={70} label="Limit" variant="dark" />
        </ScrollView>

        {/* Charts Section */}
        <View className="flex-row items-center justify-between px-4 mb-4">
          {/* 7. Apply theme text color */}
          <Text className="text-xl font-bold" style={{ color: colors.text }}>
            Charts
          </Text>
          <TouchableOpacity>
            {/* This is a brand color, so it's fine */}
            <Text className="text-sm font-semibold text-[#00F5A0]">
              See All
            </Text>
          </TouchableOpacity>
        </View>

        {/* Chart List */}
        {/* 8. NOTE: 'ChartItem.tsx' MUST be themed internally */}
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
