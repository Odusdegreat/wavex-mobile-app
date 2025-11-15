import InputField from "@/components/InputField";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function PersonalInfoScreen() {
  const router = useRouter();
  const { isDark, colors } = useTheme();

  const [fullName, setFullName] = useState("Oluwatobi Odubote");
  const [email, setEmail] = useState("tobiodubote@gmail.com");
  const [phone, setPhone] = useState("+234 818 395 3978");
  const [address, setAddress] = useState("N/A");

  const handleSave = () => {
    Alert.alert("Success", "Personal information updated successfully!");
    router.back();
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={isDark ? "light" : "dark"} />

      {/* Header */}
      <View
        className="px-4 pt-12 pb-4 flex-row items-center"
        style={{ backgroundColor: colors.card }}
      >
        <TouchableOpacity
          onPress={() => router.push("./settings")}
          className="w-10 h-10 rounded-full items-center justify-center mr-3"
          style={{ backgroundColor: colors.inputBg }}
        >
          <Feather name="arrow-left" size={20} color={colors.text} />
        </TouchableOpacity>
        <Text className="text-xl font-bold" style={{ color: colors.text }}>
          Personal Information
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6">
        {/* Profile Picture */}
        <View className="items-center mb-8">
          <LinearGradient
            colors={["#00F5A0", "#00D68F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: 96,
              height: 96,
              borderRadius: 48,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Text className="text-white text-4xl font-bold">OO</Text>
          </LinearGradient>
          <TouchableOpacity>
            <Text className="text-[#00E5A0] text-sm font-semibold">
              Change Photo
            </Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
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

        {/* Save Button */}
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
