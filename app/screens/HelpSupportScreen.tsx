import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import FAQItem from "../../components/FAQItem";

export default function HelpSupportScreen() {
  const router = useRouter();

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
        <Text className="text-xl font-bold text-gray-900">Help & Support</Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6">
        {/* Contact Options */}
        <View className="flex-row gap-3 mb-6">
          <TouchableOpacity
            className="flex-1 bg-white rounded-xl p-4 items-center"
            activeOpacity={0.7}
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center mb-2">
              <Feather name="mail" size={24} color="#3B82F6" />
            </View>
            <Text className="text-sm font-semibold text-gray-900">Email</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 bg-white rounded-xl p-4 items-center"
            activeOpacity={0.7}
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <View className="w-12 h-12 bg-green-100 rounded-full items-center justify-center mb-2">
              <MaterialCommunityIcons
                name="whatsapp"
                size={24}
                color="#10B981"
              />
            </View>
            <Text className="text-sm font-semibold text-gray-900">
              WhatsApp
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 bg-white rounded-xl p-4 items-center"
            activeOpacity={0.7}
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <View className="w-12 h-12 bg-purple-100 rounded-full items-center justify-center mb-2">
              <Feather name="message-circle" size={24} color="#8B5CF6" />
            </View>
            <Text className="text-sm font-semibold text-gray-900">Chat</Text>
          </TouchableOpacity>
        </View>

        {/* FAQs */}
        <Text className="text-lg font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </Text>

        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}

        <View className="h-8" />
      </ScrollView>
    </View>
  );
}
