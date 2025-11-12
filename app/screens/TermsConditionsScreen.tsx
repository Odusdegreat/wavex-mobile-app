import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function TermsConditionsScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#F5F7FA]">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="bg-white px-4 pt-12 pb-4 flex-row items-center">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center mr-3"
        >
          <Feather name="arrow-left" size={20} color="#1E293B" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">
          Terms & Conditions
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6">
        <View className="bg-white rounded-xl p-6 mb-4">
          <Text className="text-sm text-gray-500 mb-4">
            Last updated: January 2025
          </Text>

          <Text className="text-lg font-bold text-gray-900 mb-3">
            1. Acceptance of Terms
          </Text>
          <Text className="text-sm text-gray-700 mb-4 leading-6">
            By accessing and using CoinPro, you accept and agree to be bound by
            the terms and provision of this agreement.
          </Text>

          <Text className="text-lg font-bold text-gray-900 mb-3">
            2. Use of Service
          </Text>
          <Text className="text-sm text-gray-700 mb-4 leading-6">
            You must be at least 18 years old to use this service. You are
            responsible for maintaining the confidentiality of your account and
            password.
          </Text>

          <Text className="text-lg font-bold text-gray-900 mb-3">
            3. Trading Risks
          </Text>
          <Text className="text-sm text-gray-700 mb-4 leading-6">
            Cryptocurrency trading involves substantial risk. You should
            carefully consider whether trading is suitable for you in light of
            your financial condition.
          </Text>

          <Text className="text-lg font-bold text-gray-900 mb-3">
            4. Fees and Charges
          </Text>
          <Text className="text-sm text-gray-700 mb-4 leading-6">
            We reserve the right to charge fees for certain services. Any
            applicable fees will be disclosed to you before you complete a
            transaction.
          </Text>

          <Text className="text-lg font-bold text-gray-900 mb-3">
            5. Limitation of Liability
          </Text>
          <Text className="text-sm text-gray-700 mb-4 leading-6">
            We shall not be liable for any indirect, incidental, special,
            consequential or punitive damages resulting from your use of the
            service.
          </Text>

          <Text className="text-lg font-bold text-gray-900 mb-3">
            6. Termination
          </Text>
          <Text className="text-sm text-gray-700 mb-4 leading-6">
            We may terminate or suspend your account immediately, without prior
            notice, for any reason including breach of these Terms.
          </Text>

          <Text className="text-lg font-bold text-gray-900 mb-3">
            7. Changes to Terms
          </Text>
          <Text className="text-sm text-gray-700 leading-6">
            We reserve the right to modify these terms at any time. We will
            notify you of any changes by posting the new Terms on this page.
          </Text>
        </View>

        <View className="h-8" />
      </ScrollView>
    </View>
  );
}
