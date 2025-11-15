import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import PaymentCard from "../../components/PaymetCard";
import { useTheme } from "../../context/ThemeContext"; // Make sure path is correct

export default function PaymentMethodsScreen() {
  const router = useRouter();
  // 1. Get theme colors and mode
  const { colors } = useTheme();
  const isDarkMode =
    colors.background === "#000000" || colors.background === "#1a1a1a"; // Determine dark mode from background color

  const handleAddPayment = () => {
    Alert.alert("Add Payment", "Add new payment method feature coming soon!");
  };

  const handleDeletePayment = (type: string) => {
    Alert.alert(
      "Delete Payment Method",
      `Are you sure you want to remove this ${type}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => console.log("Deleted"),
        },
      ]
    );
  };

  return (
    // 2. Apply background color from theme
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* 3. Toggle status bar based on theme */}
      <StatusBar style={isDarkMode ? "light" : "dark"} />

      {/* 4. Apply card/header background from theme */}
      <View
        className="bg-white px-4 pt-12 pb-4 flex-row items-center justify-between"
        style={{ backgroundColor: colors.card }} // Use card/header background
      >
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 rounded-full items-center justify-center mr-3"
            // 5. Apply secondary background from theme
            style={{ backgroundColor: colors.inputBg }}
          >
            {/* 6. Apply text/icon color from theme */}
            <Feather name="arrow-left" size={20} color={colors.text} />
          </TouchableOpacity>
          <Text
            className="text-xl font-bold"
            // 6. Apply text color from theme
            style={{ color: colors.text }}
          >
            Payment Methods
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleAddPayment}
          className="w-10 h-10 rounded-full bg-[#00E5A0] items-center justify-center"
        >
          <Feather name="plus" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6">
        {/* 7. Apply secondary text color from theme */}
        <Text
          className="text-sm font-semibold text-gray-500 uppercase mb-3"
          style={{ color: colors.subtext }}
        >
          Credit & Debit Cards
        </Text>

        {/* NOTE: These PaymentCard components MUST be themed internally.
          You need to edit 'PaymentCard.tsx' and make it use useTheme()
          to change its own background and text colors.
        */}
        <PaymentCard
          type="card"
          title="Visa Card"
          number="•••• •••• •••• 4242"
          isPrimary
          onDelete={() => handleDeletePayment("card")}
        />

        <PaymentCard
          type="card"
          title="Mastercard"
          number="•••• •••• •••• 8888"
          onDelete={() => handleDeletePayment("card")}
        />

        {/* 7. Apply secondary text color from theme */}
        <Text
          className="text-sm font-semibold text-gray-500 uppercase mb-3 mt-6"
          style={{ color: colors.subtext }}
        >
          Bank Accounts
        </Text>

        <PaymentCard
          type="bank"
          title="GTBank"
          number="0123456789"
          onDelete={() => handleDeletePayment("bank account")}
        />

        <PaymentCard
          type="bank"
          title="Access Bank"
          number="9876543210"
          onDelete={() => handleDeletePayment("bank account")}
        />

        <View className="h-8" />
      </ScrollView>
    </View>
  );
}
