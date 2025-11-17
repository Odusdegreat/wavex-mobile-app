import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
export default function PrivacyPolicyScreen() {
  const router = useRouter();
  // 1. Get theme colors and mode
  const { isDark, colors } = useTheme();

  return (
    // 2. Apply background color from theme
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* 3. Toggle status bar based on theme */}
      <StatusBar style={isDark ? "light" : "dark"} />

      {/* Header */}
      <View
        className="px-4 pt-12 pb-4 flex-row items-center"
        // 4. Apply card/header background from theme
        style={{ backgroundColor: colors.card }}
      >
        <TouchableOpacity
          // FIX: Changed router.push to router.back() for standard back behavior
          onPress={() => router.push("/settings")}
          className="w-10 h-10 rounded-full items-center justify-center mr-3"
          // 5. Apply secondary background from theme
          style={{ backgroundColor: colors.subtext }}
        >
          {/* 6. Apply text/icon color from theme */}
          <Feather name="arrow-left" size={20} color={colors.text} />
        </TouchableOpacity>
        <Text
          className="text-xl font-bold"
          // 6. Apply text color from theme
          style={{ color: colors.text }}
        >
          Privacy Policy
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6">
        {/* Content Card */}
        <View
          className="rounded-xl p-6 mb-4"
          // 7. Apply card background to the content box
          style={{ backgroundColor: colors.card }}
        >
          {/* Last Updated Date */}
          <Text
            className="text-sm mb-4"
            // 8. Apply secondary text color
            style={{ color: colors.subtext }}
          >
            Last updated: January 2025
          </Text>

          {/* Section 1 */}
          <Text
            className="text-lg font-bold mb-3"
            // 9. Apply primary text color to all headings
            style={{ color: colors.text }}
          >
            1. Information We Collect
          </Text>
          <Text
            className="text-sm mb-4 leading-6"
            // 10. Apply secondary text color to all body text
            style={{ color: colors.subtext }}
          >
            We collect information you provide directly to us, such as your
            name, email address, phone number, and payment information when you
            create an account or use our services.
          </Text>

          {/* Section 2 */}
          <Text
            className="text-lg font-bold mb-3"
            style={{ color: colors.text }}
          >
            2. How We Use Your Information
          </Text>
          <Text
            className="text-sm mb-4 leading-6"
            style={{ color: colors.subtext }}
          >
            We use the information we collect to provide, maintain, and improve
            our services, process your transactions, send you technical notices
            and support messages, and respond to your comments and questions.
          </Text>

          {/* Section 3 */}
          <Text
            className="text-lg font-bold mb-3"
            style={{ color: colors.text }}
          >
            3. Information Sharing
          </Text>
          <Text
            className="text-sm mb-4 leading-6"
            style={{ color: colors.subtext }}
          >
            We do not share your personal information with third parties except
            as described in this policy. We may share information with service
            providers who perform services on our behalf.
          </Text>

          {/* Section 4 */}
          <Text
            className="text-lg font-bold mb-3"
            style={{ color: colors.text }}
          >
            4. Data Security
          </Text>
          <Text
            className="text-sm mb-4 leading-6"
            style={{ color: colors.subtext }}
          >
            We take reasonable measures to help protect your personal
            information from loss, theft, misuse, unauthorized access,
            disclosure, alteration, and destruction.
          </Text>

          {/* Section 5 */}
          <Text
            className="text-lg font-bold mb-3"
            style={{ color: colors.text }}
          >
            5. Your Rights
          </Text>
          <Text
            className="text-sm mb-4 leading-6"
            style={{ color: colors.subtext }}
          >
            You have the right to access, update, or delete your personal
            information at any time. You can also object to processing of your
            data or request restriction of processing.
          </Text>

          {/* Section 6 */}
          <Text
            className="text-lg font-bold mb-3"
            style={{ color: colors.text }}
          >
            6. Contact Us
          </Text>
          <Text className="text-sm leading-6" style={{ color: colors.subtext }}>
            If you have any questions about this Privacy Policy, please contact
            us at privacy@WaVex.com
          </Text>
        </View>

        <View className="h-8" />
      </ScrollView>
    </View>
  );
}
