import InputField from "@/components/InputField";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext"; // Make sure path is correct

export default function ChangePasswordScreen() {
  const router = useRouter();
  // 1. Get theme colors
  const { colors } = useTheme();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "New passwords do not match");
      return;
    }
    Alert.alert("Success", "Password changed successfully!");
    router.back();
  };

  return (
    // 2. Apply background color from theme
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* 3. Set status bar style to auto (theme handles styling) */}
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
          Change Password
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6">
        {/* 7. Theme the Security Info box */}
        <View
          className="rounded-xl p-4 mb-6 flex-row"
          style={{ backgroundColor: colors.inputBg }} // Use secondary bg
        >
          <Feather
            name="info"
            size={20}
            color="#3B82F6" // Keep the blue "info" color
            style={{ marginRight: 12 }}
          />
          <View className="flex-1">
            <Text
              className="text-sm font-semibold mb-1"
              style={{ color: colors.text }} // Use theme text
            >
              Password Requirements
            </Text>
            <Text
              className="text-xs"
              style={{ color: colors.subtext }} // Use theme secondary text
            >
              Must be at least 8 characters with uppercase, lowercase, and
              numbers
            </Text>
          </View>
        </View>

        {/* Form Fields */}
        {/* NOTE: You MUST update your 'InputField.tsx' component.
          It needs to use 'useTheme()' inside itself to work in dark mode.
        */}
        <InputField
          label="Current Password"
          value={currentPassword}
          onChangeText={setCurrentPassword}
          icon="lock"
          placeholder="Enter current password"
          secureTextEntry
        />

        <InputField
          label="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          icon="lock"
          placeholder="Enter new password"
          secureTextEntry
        />

        <InputField
          label="Confirm New Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          icon="lock"
          placeholder="Confirm new password"
          secureTextEntry
        />

        {/* Change Password Button (Brand color, no change needed) */}
        <TouchableOpacity
          className="bg-[#00E5A0] rounded-xl py-4 items-center mt-6 mb-8"
          onPress={handleChangePassword}
          activeOpacity={0.7}
        >
          <Text className="text-white text-base font-semibold">
            Change Password
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
