import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";

import ActionButtons from "./ActionButton";

interface BalanceCardProps {
  balance?: number;
  changePercent?: number;
}

export default function BalanceCard({
  balance = 69032.69,
  changePercent = 20,
}: BalanceCardProps) {
  // State to hold the number that will be displayed
  const [displayedBalance, setDisplayedBalance] = useState(0);

  // Ref to hold the animated value
  const animatedValue = useRef(new Animated.Value(0)).current;

  // Animation logic (This is unchanged and correct)
  useEffect(() => {
    const listener = animatedValue.addListener(({ value }) => {
      setDisplayedBalance(value);
    });

    Animated.timing(animatedValue, {
      toValue: balance,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    return () => {
      animatedValue.removeListener(listener);
    };
  }, [balance, animatedValue]);

  return (
    // ADJUSTED TOP MARGIN: increased mt-8 to mt-16 for maximum clearance on iOS notch
    <View className="mx-4 mt-[100px] mb-4">
      <LinearGradient
        colors={["#00F5A0", "#00D68F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 24,
          padding: 24,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 12,
          elevation: 8,
        }}
      >
        {/* Header */}
        <View className="flex-row justify-between items-start mb-6">
          <View>
            <Text className="text-white/90 text-sm mb-1">Welcome to</Text>
            <Text className="text-white text-3xl font-bold">WaVex</Text>
          </View>
        </View>

        {/* Balance Section */}
        {/* Increased margin below the balance for better separation */}
        <View className="mb-6">
          <Text className="text-white/90 text-sm mb-2">My Balance</Text>
          <View className="flex-row items-center">
            <Text className="text-white text-4xl font-bold mr-3">
              ${" "}
              {displayedBalance.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
            <View className="bg-white/30 px-3 py-1.5 rounded-full">
              <Text className="text-white text-xs font-bold">
                ▲ {changePercent}%
              </Text>
            </View>
          </View>
        </View>

        {/* White Container with Buttons */}
        <View className="bg-white rounded-2xl p-4">
          <ActionButtons />
        </View>
      </LinearGradient>
    </View>
  );
}
