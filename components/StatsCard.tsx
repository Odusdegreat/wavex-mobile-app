import React from "react";
import { Text, View } from "react-native";

interface Props {
  icon?: string;
  count: number;
  label: string;
  variant?: "primary" | "dark";
}

export default function StatsCard({ icon, count, label, variant }: Props) {
  const bg = variant === "primary" ? "#00E5A0" : "#1E293B";
  const textColor = variant === "primary" ? "#000" : "#FFF";

  return (
    <View
      style={{
        backgroundColor: bg,
        padding: 16,
        borderRadius: 16,
        minWidth: 140,
        marginRight: 16,
      }}
    >
      {icon ? (
        <Text style={{ fontSize: 22, marginBottom: 4 }}>{icon}</Text>
      ) : null}

      <Text style={{ fontSize: 20, fontWeight: "bold", color: textColor }}>
        {count}
      </Text>

      <Text style={{ color: textColor, marginTop: 4 }}>{label}</Text>
    </View>
  );
}
