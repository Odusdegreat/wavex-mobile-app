import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // ✅ FIX: Navigation
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";

interface NotificationState {
  pushEnabled: boolean;
  emailEnabled: boolean;
  transactions: boolean;
  lowBalance: boolean;
  billReminders: boolean;
  securityAlerts: boolean;
  marketUpdates: boolean;
  promotions: boolean;
  accountActivity: boolean;
  paymentConfirmations: boolean;
}

interface NotificationItemProps {
  iconName: keyof typeof Feather.glyphMap;
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}

const NotificationSettings: React.FC = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const isDark = theme === "dark";

  const [notifications, setNotifications] = useState<NotificationState>({
    pushEnabled: true,
    emailEnabled: true,
    transactions: true,
    lowBalance: true,
    billReminders: true,
    securityAlerts: true,
    marketUpdates: false,
    promotions: false,
    accountActivity: true,
    paymentConfirmations: true,
  });

  const toggleNotification = (key: keyof NotificationState) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const NotificationItem: React.FC<NotificationItemProps> = ({
    iconName,
    title,
    description,
    enabled,
    onToggle,
  }) => (
    <View
      style={[
        styles.notificationItem,
        { borderBottomColor: isDark ? "#1F2937" : "#F3F4F6" },
      ]}
    >
      <View style={styles.itemContent}>
        <View style={styles.iconContainer}>
          <Feather
            name={iconName}
            size={20}
            color={isDark ? "#D1D5DB" : "#6B7280"}
          />
        </View>

        <View style={styles.textContainer}>
          <Text
            style={[
              styles.itemTitle,
              { color: isDark ? "#F9FAFB" : "#111827" },
            ]}
          >
            {title}
          </Text>

          <Text
            style={[
              styles.itemDescription,
              { color: isDark ? "#9CA3AF" : "#6B7280" },
            ]}
          >
            {description}
          </Text>
        </View>
      </View>

      <Switch
        value={enabled}
        onValueChange={onToggle}
        trackColor={{ false: "#6B7280", true: "#22C55E" }}
        thumbColor={isDark ? "#F3F4F6" : "#FFFFFF"}
        ios_backgroundColor={isDark ? "#374151" : "#D1D5DB"}
      />
    </View>
  );

  const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <View style={styles.sectionHeader}>
      <Text
        style={[styles.sectionTitle, { color: isDark ? "#D1D5DB" : "#111827" }]}
      >
        {title}
      </Text>
    </View>
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDark ? "#111827" : "#F9FAFB" },
      ]}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: isDark ? "#1F2937" : "#FFFFFF",
            borderBottomColor: isDark ? "#374151" : "#E5E7EB",
          },
        ]}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Feather
              name="arrow-left"
              size={24}
              color={isDark ? "#F9FAFB" : "#111827"}
              onPress={() => router.push("/settings")}
            />
          </TouchableOpacity>

          <View style={styles.headerTextContainer}>
            <Text
              style={[
                styles.headerTitle,
                { color: isDark ? "#F9FAFB" : "#111827" },
              ]}
            >
              Notifications
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.headerSubtitle,
            { color: isDark ? "#9CA3AF" : "#6B7280" },
          ]}
        >
          Manage your notification preferences
        </Text>
      </View>

      {/* Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Notification Channels */}
        <View style={styles.section}>
          <SectionHeader title="Notification Channels" />
          <View
            style={[
              styles.card,
              {
                backgroundColor: isDark ? "#1F2937" : "#FFFFFF",
                shadowOpacity: isDark ? 0 : 0.08,
              },
            ]}
          >
            <NotificationItem
              iconName="smartphone"
              title="Push Notifications"
              description="Receive notifications on your device"
              enabled={notifications.pushEnabled}
              onToggle={() => toggleNotification("pushEnabled")}
            />

            <NotificationItem
              iconName="mail"
              title="Email Notifications"
              description="Receive notifications via email"
              enabled={notifications.emailEnabled}
              onToggle={() => toggleNotification("emailEnabled")}
            />
          </View>
        </View>

        {/* Transaction Alerts */}
        <View style={styles.section}>
          <SectionHeader title="Transaction Alerts" />
          <View
            style={[
              styles.card,
              { backgroundColor: isDark ? "#1F2937" : "#FFFFFF" },
            ]}
          >
            <NotificationItem
              iconName="dollar-sign"
              title="All Transactions"
              description="Get notified for every transaction"
              enabled={notifications.transactions}
              onToggle={() => toggleNotification("transactions")}
            />

            <NotificationItem
              iconName="trending-down"
              title="Low Balance Alert"
              description="Alert when your balance is low"
              enabled={notifications.lowBalance}
              onToggle={() => toggleNotification("lowBalance")}
            />

            <NotificationItem
              iconName="credit-card"
              title="Payment Confirmations"
              description="Get confirmations for completed payments"
              enabled={notifications.paymentConfirmations}
              onToggle={() => toggleNotification("paymentConfirmations")}
            />
          </View>
        </View>

        {/* Account & Security */}
        <View style={styles.section}>
          <SectionHeader title="Account & Security" />
          <View
            style={[
              styles.card,
              { backgroundColor: isDark ? "#1F2937" : "#FFFFFF" },
            ]}
          >
            <NotificationItem
              iconName="shield"
              title="Security Alerts"
              description="Important security notifications"
              enabled={notifications.securityAlerts}
              onToggle={() => toggleNotification("securityAlerts")}
            />

            <NotificationItem
              iconName="user-check"
              title="Account Activity"
              description="Updates related to your account"
              enabled={notifications.accountActivity}
              onToggle={() => toggleNotification("accountActivity")}
            />

            <NotificationItem
              iconName="bell"
              title="Bill Reminders"
              description="Upcoming bill notifications"
              enabled={notifications.billReminders}
              onToggle={() => toggleNotification("billReminders")}
            />
          </View>
        </View>

        {/* Marketing */}
        <View style={styles.section}>
          <SectionHeader title="Marketing & Updates" />
          <View
            style={[
              styles.card,
              { backgroundColor: isDark ? "#1F2937" : "#FFFFFF" },
            ]}
          >
            <NotificationItem
              iconName="activity"
              title="Market Updates"
              description="Financial news & updates"
              enabled={notifications.marketUpdates}
              onToggle={() => toggleNotification("marketUpdates")}
            />

            <NotificationItem
              iconName="gift"
              title="Promotions & Offers"
              description="Special offers and promo alerts"
              enabled={notifications.promotions}
              onToggle={() => toggleNotification("promotions")}
            />
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text
            style={[
              styles.footerText,
              { color: isDark ? "#6B7280" : "#9CA3AF" },
            ]}
          >
            You can change these settings anytime.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    borderBottomWidth: 1,
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 18,
  },

  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: { padding: 8, marginRight: 12 },

  headerTextContainer: { flex: 1 },

  headerTitle: { fontSize: 24, fontWeight: "700" },

  headerSubtitle: { fontSize: 14, marginTop: 6 },

  section: { marginBottom: 22 },

  sectionHeader: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },

  card: {
    marginHorizontal: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },

  notificationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    minHeight: 70,
  },

  itemContent: { flexDirection: "row", flex: 1 },

  iconContainer: { marginRight: 12 },

  textContainer: { flex: 1 },

  itemTitle: { fontSize: 16, fontWeight: "600" },

  itemDescription: { fontSize: 13, marginTop: 2 },

  footer: {
    paddingHorizontal: 24,
    paddingVertical: 30,
    alignItems: "center",
  },

  footerText: { fontSize: 13, textAlign: "center", lineHeight: 18 },
});

export default NotificationSettings;
