import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PrivacyPolicyScreen() {
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
        <Text className="text-xl font-bold text-gray-900">Privacy Policy</Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6">
        <View className="bg-white rounded-xl p-6 mb-4">
          <Text className="text-sm text-gray-500 mb-4">Last updated: January 2025</Text>

          <Text className="text-lg font-bold text-gray-900 mb-3">1. Information We Collect</Text>
          <Text className="text-sm text-gray-700 mb-4 leading-6">
            We collect information you provide directly to us, such as your name, email address, phone number, and payment information when you create an account or use our services.
          </Text>

          <Text className="text-lg font-bold text-gray-900 mb-3">2. How We Use Your Information</Text>
          <Text className="text-sm text-gray-700 mb-4 leading-6">
            We use the information we collect to provide, maintain, and improve our services, process your transactions, send you technical notices and support messages, and respond to your comments and questions.
          </Text>

          <Text className="text-lg font-bold text-gray-900 mb-3">3. Information Sharing</Text>
          <Text className="text-sm text-gray-700 mb-4 leading-6">
            We do not share your personal information with third parties except as described in this policy. We may share information with service providers who perform services on our behalf.
          </Text>

          <Text className="text-lg font-bold text-gray-900 mb-3">4. Data Security</Text>
          <Text className="text-sm text-gray-700 mb-4 leading-6">
            We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
          </Text>

          <Text className="text-lg font-bold text-gray-900 mb-3">5. Your Rights</Text>
          <Text className="text-sm text-gray-700 mb-4 leading-6">
            You have the right to access, update, or delete your personal information at any time. You can also object to processing of your data or request restriction of processing.
          </Text>

          <Text className="text-lg font-bold text-gray-900 mb-3">6. Contact Us</Text>
          <Text className="text-sm text-gray-700 leading-6">
            If you have any questions about this Privacy Policy, please contact us at privacy@coinpro.com
          </Text>
        </View>

        <View className="h-8" />
      </ScrollView>
    </View>
  );
}