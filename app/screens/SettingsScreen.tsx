import BottomNav from "@/components/BottomNav";
import ProfileCard from "@/components/ProfileCard";
import SettingsItem from "@/components/SettingsItem";
import SettingsSection from "@/components/SettingsSection";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // 1. IMPORT THE ROUTER
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  const router = useRouter(); // 2. INITIALIZE THE ROUTER
  const [notifications, setNotifications] = useState(true);
  const [biometric, setBiometric] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => console.log("Logged out"),
      },
    ]);
  };

  return (
    <View className="flex-1 bg-[#F5F7FA]">
      <StatusBar style="dark" />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View className="px-4 pt-12 pb-4">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-sm text-gray-500 mt-1">
                Manage your account
              </Text>
            </View>
            <TouchableOpacity
              className="w-10 h-10 rounded-full bg-white items-center justify-center"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <Feather name="bell" size={20} color="#1E293B" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Card */}
        <ProfileCard />

        {/* Account Settings */}
        <SettingsSection title="Account">
          <SettingsItem
            icon="user"
            title="Personal Information"
            subtitle="Update your details"
            iconBg="#DBEAFE"
            iconColor="#3B82F6"
            // 3. USE THE ROUTER TO NAVIGATE
            // (Make sure this path matches your file location in the 'app' folder)
            onPress={() => router.push("/screens/PersonalInfoScreen")}
          />
          <View className="h-px bg-gray-100 ml-16" />
          <SettingsItem
            icon="lock"
            title="Change Password"
            subtitle="Keep your account secure"
            iconBg="#FCE7F3"
            iconColor="#EC4899"
            onPress={() => router.push("/screens/ChagePasswordScreen")} // You can route this later
          />
          <View className="h-px bg-gray-100 ml-16" />
          <SettingsItem
            icon="credit-card"
            title="Payment Methods"
            subtitle="Manage cards & banks"
            iconBg="#FEF3C7"
            iconColor="#F59E0B"
            onPress={() => router.push("/screens/PaymentMethodsScreen")} // You can route this later
          />
        </SettingsSection>

        {/* Preferences */}
        <SettingsSection title="Preferences">
          <SettingsItem
            icon="bell"
            title="Push Notifications"
            showSwitch
            switchValue={notifications}
            onSwitchChange={setNotifications}
            iconBg="#D1FAE5"
            iconColor="#10B981"
          />
          <View className="h-px bg-gray-100 ml-16" />
          <SettingsItem
            icon="smartphone"
            title="Biometric Authentication"
            showSwitch
            switchValue={biometric}
            onSwitchChange={setBiometric}
            iconBg="#E0E7FF"
            iconColor="#6366F1"
          />
          <View className="h-px bg-gray-100 ml-16" />
          <SettingsItem
            icon="moon"
            title="Dark Mode"
            showSwitch
            switchValue={darkMode}
            onSwitchChange={setDarkMode}
            iconBg="#F3E8FF"
            iconColor="#A855F7"
          />
        </SettingsSection>

        {/* More */}
        <SettingsSection title="More">
          <SettingsItem
            icon="help-circle"
            title="Help & Support"
            subtitle="Get assistance"
            iconBg="#DBEAFE"
            iconColor="#3B82F6"
            onPress={() => router.push("/screens/HelpSupportScreen")}
          />
          <View className="h-px bg-gray-100 ml-16" />
          <SettingsItem
            icon="shield"
            title="Privacy Policy"
            iconBg="#D1FAE5"
            iconColor="#10B981"
            onPress={() => router.push("/screens/PrivacyPolicyScreen")}
          />
          <View className="h-px bg-gray-100 ml-16" />
          <SettingsItem
            icon="file-text"
            title="Terms & Conditions"
            iconBg="#FEF3C7"
            iconColor="#F59E0B"
            onPress={() => router.push("/screens/TermsConditionsScreen")}
          />
          <View className="h-px bg-gray-100 ml-16" />
          <SettingsItem
            icon="info"
            title="About"
            subtitle="Version 1.0.0"
            iconBg="#E0E7FF"
            iconColor="#6366F1"
            onPress={() => console.log("About")}
          />
        </SettingsSection>

        {/* Logout Button */}
        <TouchableOpacity
          className="mx-4 mt-6 bg-white rounded-2xl p-4 flex-row items-center justify-center"
          onPress={handleLogout}
          activeOpacity={0.7}
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 8,
            elevation: 2,
          }}
        >
          <Feather name="log-out" size={20} color="#EF4444" />
          <Text className="text-red-500 text-base font-semibold ml-2">
            Logout
          </Text>
        </TouchableOpacity>

        <View className="h-8" />
      </ScrollView>

      <BottomNav />
    </View>
  );
}
