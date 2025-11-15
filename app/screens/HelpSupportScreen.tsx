import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import FAQItem from "../../components/FAQItem";
import { useTheme } from "../../context/ThemeContext"; // Make sure path is correct

export default function HelpSupportScreen() {
  const router = useRouter();
  // 1. Get theme colors and mode
  const { colors } = useTheme();
  // Remove isDarkMode reference since it's not part of colors

  const faqs = [
    {
      question: "How do I deposit funds?",
      answer:
        'You can deposit funds by clicking the "Deposit INR" button on the home screen. Choose your preferred payment method and follow the instructions.',
    },
    {
      question: "How long does withdrawal take?",
      answer:
        "Withdrawals typically take 1-3 business days to process, depending on your bank. Instant withdrawals may be available for premium users.",
    },
    {
      question: "Is my money safe?",
      answer:
        "Yes! We use bank-level encryption and security measures to protect your funds. Your money is stored in secure, regulated financial institutions.",
    },
    {
      question: "How do I verify my account?",
      answer:
        "Go to Settings > Personal Information and upload your ID document. Verification usually takes 24-48 hours.",
    },
  ];

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
          Help & Support
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6">
        {/* 7. Theme the Contact Options cards */}
        <View className="flex-row gap-3 mb-6">
          {/* Email Card */}
          <TouchableOpacity
            className="flex-1 rounded-xl p-4 items-center"
            activeOpacity={0.7}
            style={{
              backgroundColor: colors.card, // Use theme card color
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05, // Always show shadow
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <View
              className="w-12 h-12 rounded-full items-center justify-center mb-2"
              style={{ backgroundColor: colors.inputBg }} // Use theme inputBg as secondary bg
            >
              <Feather name="mail" size={24} color="#3B82F6" />
            </View>
            <Text
              className="text-sm font-semibold"
              style={{ color: colors.text }} // Use theme text
            >
              Email
            </Text>
          </TouchableOpacity>

          {/* WhatsApp Card */}
          <TouchableOpacity
            className="flex-1 rounded-xl p-4 items-center"
            activeOpacity={0.7}
            style={{
              backgroundColor: colors.card, // Use theme card color
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05, // Always show shadow
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <View
              className="w-12 h-12 rounded-full items-center justify-center mb-2"
              style={{ backgroundColor: colors.inputBg }} // Use theme inputBg as secondary bg
            >
              <MaterialCommunityIcons
                name="whatsapp"
                size={24}
                color="#10B981"
              />
            </View>
            <Text
              className="text-sm font-semibold"
              style={{ color: colors.text }} // Use theme text
            >
              WhatsApp
            </Text>
          </TouchableOpacity>

          {/* Chat Card */}
          <TouchableOpacity
            className="flex-1 rounded-xl p-4 items-center"
            activeOpacity={0.7}
            style={{
              backgroundColor: colors.card, // Use theme card color
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05, // Always show shadow
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <View
              className="w-12 h-12 rounded-full items-center justify-center mb-2"
              style={{ backgroundColor: colors.inputBg }} // Use theme inputBg as secondary bg
            >
              <Feather name="message-circle" size={24} color="#8B5CF6" />
            </View>
            <Text
              className="text-sm font-semibold"
              style={{ color: colors.text }} // Use theme text
            >
              Chat
            </Text>
          </TouchableOpacity>
        </View>

        {/* 8. Theme the FAQs Title */}
        <Text
          className="text-lg font-bold mb-4"
          style={{ color: colors.text }} // Use theme text
        >
          Frequently Asked Questions
        </Text>

        {/* NOTE: You MUST update your 'FAQItem.tsx' component.
          It needs to use 'useTheme()' inside itself to change its
          background, question text, and answer text colors.
        */}
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}

        <View className="h-8" />
      </ScrollView>
    </View>
  );
}
