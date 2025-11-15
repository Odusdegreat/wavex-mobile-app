import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext"; // Make sure path is correct

export default function TermsConditionsScreen() {
  const router = useRouter();
  // 1. Get theme colors and mode
  const { colors } = useTheme();

  return (
    // 2. Apply background color from theme
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* 3. Toggle status bar based on theme */}
      <StatusBar style="auto" />

      {/* 4. Apply card/header background from theme */}
      <View
        className="px-4 pt-12 pb-4 flex-row items-center"
        style={{ backgroundColor: colors.card }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full items-center justify-center mr-3"
          // 5. Apply secondary background from theme
          style={{ backgroundColor: colors.card }}
        >
          {/* 6. Apply text/icon color from theme */}
          <Feather name="arrow-left" size={20} color={colors.text} />
        </TouchableOpacity>
        <Text
          className="text-xl font-bold"
          // 6. Apply text color from theme
          style={{ color: colors.text }}
        >
          Terms & Conditions
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6">
        {/* 7. Apply card background to the content box */}
        <View
          className="rounded-xl p-6 mb-4"
          style={{ backgroundColor: colors.card }}
        >
          {/* 8. Apply secondary text color */}
          <Text className="text-sm mb-4" style={{ color: colors.subtext }}>
            Last updated: January 2025
          </Text>

          {/* 9. Apply primary text color to all headings */}
          <Text
            className="text-lg font-bold mb-3"
            style={{ color: colors.text }}
          >
            1. Acceptance of Terms
          </Text>
          {/* 10. Apply secondary text color to all body text */}
          <Text
            className="text-sm mb-4 leading-6"
            style={{ color: colors.subtext }}
          >
            By accessing and using WaVex, you accept and agree to be bound by
            the terms and provision of this agreement.
          </Text>

          <Text
            className="text-lg font-bold mb-3"
            style={{ color: colors.text }}
          >
            2. Use of Service
          </Text>
          <Text
            className="text-sm mb-4 leading-6"
            style={{ color: colors.subtext }}
          >
            You must be at least 18 years old to use this service. You are
            responsible for maintaining the confidentiality of your account and
            password.
          </Text>

          <Text
            className="text-lg font-bold mb-3"
            style={{ color: colors.text }}
          >
            3. Trading Risks
          </Text>
          <Text
            className="text-sm mb-4 leading-6"
            style={{ color: colors.subtext }}
          >
            Cryptocurrency trading involves substantial risk. You should
            carefully consider whether trading is suitable for you in light of
            your financial condition.
          </Text>

          <Text
            className="text-lg font-bold mb-3"
            style={{ color: colors.text }}
          >
            4. Fees and Charges
          </Text>
          <Text
            className="text-sm mb-4 leading-6"
            style={{ color: colors.subtext }}
          >
            We reserve the right to charge fees for certain services. Any
            applicable fees will be disclosed to you before you complete a
            transaction.
          </Text>

          <Text
            className="text-lg font-bold mb-3"
            style={{ color: colors.text }}
          >
            5. Limitation of Liability
          </Text>
          <Text
            className="text-sm mb-4 leading-6"
            style={{ color: colors.subtext }}
          >
            We shall not be liable for any indirect, incidental, special,
            consequential or punitive damages resulting from your use of the
            service.
          </Text>

          <Text
            className="text-lg font-bold mb-3"
            style={{ color: colors.text }}
          >
            6. Termination
          </Text>
          <Text
            className="text-sm mb-4 leading-6"
            style={{ color: colors.subtext }}
          >
            We may terminate or suspend your account immediately, without prior
            notice, for any reason including breach of these Terms.
          </Text>

          <Text
            className="text-lg font-bold mb-3"
            style={{ color: colors.text }}
          >
            7. Changes to Terms
          </Text>
          <Text className="text-sm leading-6" style={{ color: colors.subtext }}>
            We reserve the right to modify these terms at any time. We will
            notify you of any changes by posting the new Terms on this page.
          </Text>
        </View>

        <View className="h-8" />
      </ScrollView>
    </View>
  );
}
