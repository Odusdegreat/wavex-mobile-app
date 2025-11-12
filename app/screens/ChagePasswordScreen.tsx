import InputField from "@/components/InputField";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ChangePasswordScreen() {
  const router = useRouter();
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
        <Text className="text-xl font-bold text-gray-900">Change Password</Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6">
        {/* Security Info */}
        <View className="bg-blue-50 rounded-xl p-4 mb-6 flex-row">
          <Feather
            name="info"
            size={20}
            color="#3B82F6"
            style={{ marginRight: 12 }}
          />
          <View className="flex-1">
            <Text className="text-sm text-blue-900 font-semibold mb-1">
              Password Requirements
            </Text>
            <Text className="text-xs text-blue-700">
              Must be at least 8 characters with uppercase, lowercase, and
              numbers
            </Text>
          </View>
        </View>

        {/* Form Fields */}
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

        {/* Change Password Button */}
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
