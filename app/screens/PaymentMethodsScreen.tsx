import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import PaymentCard from "../../components/PaymetCard";

export default function PaymentMethodsScreen() {
  const router = useRouter();

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
    <View className="flex-1 bg-[#F5F7FA]">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="bg-white px-4 pt-12 pb-4 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center mr-3"
          >
            <Feather name="arrow-left" size={20} color="#1E293B" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-gray-900">
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
        {/* Cards Section */}
        <Text className="text-sm font-semibold text-gray-500 uppercase mb-3">
          Credit & Debit Cards
        </Text>

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

        {/* Bank Accounts Section */}
        <Text className="text-sm font-semibold text-gray-500 uppercase mb-3 mt-6">
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
