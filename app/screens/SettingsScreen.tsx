import BottomNav from "@/components/BottomNav";
import ProfileCard from "@/components/ProfileCard";
import SettingsItem from "@/components/SettingsItem";
import SettingsSection from "@/components/SettingsSection";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native"; // Added Platform
import { useTheme } from "../../context/ThemeContext";

export default function SettingsScreen() {
  const router = useRouter();
  const { isDark, toggleTheme, colors } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [biometric, setBiometric] = useState(false);

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
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={isDark ? "light" : "dark"} />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header - APPLY PADDING FIX HERE */}
        <View
          className="px-4 pb-4"
          // INCREASED PADDING TOP for more space and iOS notch clearance
          style={{ paddingTop: Platform.OS === "ios" ? 60 : 20 }}
        >
          <View className="flex-row items-center justify-between">
            {/* 1. TEXT CONTAINER: Set height and align center */}
            <View>
              <Text
                style={{ color: colors.subtext }}
                // Removed redundant 'items-center' class
                className="text-sm mt-1"
              >
                Manage your account
              </Text>
            </View>

            {/* Notification Button */}
            <TouchableOpacity
              className="w-10 h-10 rounded-full items-center justify-center"
              style={{
                backgroundColor: colors.card,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: isDark ? 0 : 0.05,
                shadowRadius: 4,
                elevation: isDark ? 0 : 2,
              }}
            >
              <Feather name="bell" size={20} color={colors.text} />
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
            onPress={() => router.push("/(tabs)/personalinformation")}
          />
          <View
            style={{ backgroundColor: colors.border }}
            className="h-px ml-16"
          />
          <SettingsItem
            icon="lock"
            title="Change Password"
            subtitle="Keep your account secure"
            iconBg="#FCE7F3"
            iconColor="#EC4899"
            onPress={() => router.push("/(tabs)/changepassword")}
          />
          <View
            style={{ backgroundColor: colors.border }}
            className="h-px ml-16"
          />
          <SettingsItem
            icon="credit-card"
            title="Payment Methods"
            subtitle="Manage cards & banks"
            iconBg="#FEF3C7"
            iconColor="#F59E0B"
            onPress={() => router.push("/(tabs)/paymentmethods")}
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
          <View
            style={{ backgroundColor: colors.border }}
            className="h-px ml-16"
          />
          <SettingsItem
            icon="smartphone"
            title="Biometric Authentication"
            showSwitch
            switchValue={biometric}
            onSwitchChange={setBiometric}
            iconBg="#E0E7FF"
            iconColor="#6366F1"
          />
          <View
            style={{ backgroundColor: colors.border }}
            className="h-px ml-16"
          />
          {/* Dark Mode Switch (Correct) */}
          <SettingsItem
            icon={isDark ? "sun" : "moon"}
            title={isDark ? "Light Mode" : "Dark Mode"}
            showSwitch
            switchValue={isDark}
            onSwitchChange={toggleTheme}
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
            onPress={() => router.push("/(tabs)/helpsupport")}
          />
          <View
            style={{ backgroundColor: colors.border }}
            className="h-px ml-16"
          />
          <SettingsItem
            icon="shield"
            title="Privacy Policy"
            iconBg="#D1FAE5"
            iconColor="#10B981"
            onPress={() => router.push("/(tabs)/privacypolicy")}
          />
          <View
            style={{ backgroundColor: colors.border }}
            className="h-px ml-16"
          />
          <SettingsItem
            icon="file-text"
            title="Terms & Conditions"
            iconBg="#FEF3C7"
            iconColor="#F59E0B"
            onPress={() => router.push("/screens/TermsConditionsScreen")}
          />
          <View
            style={{ backgroundColor: colors.border }}
            className="h-px ml-16"
          />
          <SettingsItem
            icon="info"
            title="About"
            subtitle="Version 1.0.0"
            iconBg="#E0E7FF"
            iconColor="#6366F1"
          />
        </SettingsSection>

        {/* Logout Button */}
        <TouchableOpacity
          className="mx-4 mt-6 rounded-2xl p-4 flex-row items-center justify-center"
          onPress={handleLogout}
          activeOpacity={0.7}
          style={{
            backgroundColor: colors.card,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: isDark ? 0 : 0.05,
            shadowRadius: 8,
            elevation: isDark ? 0 : 2,
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
