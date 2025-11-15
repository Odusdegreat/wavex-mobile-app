import InputField from "@/components/InputField";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext"; // Make sure path is correct

export default function PersonalInfoScreen() {
  const router = useRouter();
  // 1. Get theme colors and mode
  const { colors } = useTheme();

  const [fullName, setFullName] = useState("Oluwatobi Odubote");
  const [email, setEmail] = useState("tobiodubote@gmail.com");
  const [phone, setPhone] = useState("+234 818 395 3978");
  const [address, setAddress] = useState("N/A");

  const handleSave = () => {
    Alert.alert("Success", "Personal information updated successfully!");
  };

  return (
    // 2. Apply background color from theme
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* 3. Toggle status bar based on theme */}
      <StatusBar style="light" />

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
          Personal Information
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6">
        {/* Profile Picture */}
        <View className="items-center mb-8">
          {/* This gradient is a brand color, so it can stay */}
          <View className="w-24 h-24 bg-gradient-to-br from-[#00F5A0] to-[#00D68F] rounded-full items-center justify-center mb-4">
            <Text className="text-white text-4xl font-bold">OO</Text>
          </View>
          <TouchableOpacity>
            {/* The "Change Photo" text can stay green as it matches the brand */}
            <Text className="text-[#00E5A0] text-sm font-semibold">
              Change Photo
            </Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        {/* NOTE: You MUST update your 'InputField.tsx' component.
          It needs to use 'useTheme()' inside itself to change its
          background, border, label, and input text colors based
          on isDarkMode.
        */}
        <InputField
          label="Full Name"
          value={fullName}
          onChangeText={setFullName}
          icon="user"
          placeholder="Enter your full name"
        />

        <InputField
          label="Email Address"
          value={email}
          onChangeText={setEmail}
          icon="mail"
          placeholder="Enter your email"
        />

        <InputField
          label="Phone Number"
          value={phone}
          onChangeText={setPhone}
          icon="phone"
          placeholder="Enter your phone number"
        />

        <InputField
          label="Address"
          value={address}
          onChangeText={setAddress}
          icon="map-pin"
          placeholder="Enter your address"
        />

        {/* Save Button (This is a brand color, so it's fine) */}
        <TouchableOpacity
          className="bg-[#00E5A0] rounded-xl py-4 items-center mt-6 mb-8"
          onPress={handleSave}
          activeOpacity={0.7}
        >
          <Text className="text-white text-base font-semibold">
            Save Changes
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
