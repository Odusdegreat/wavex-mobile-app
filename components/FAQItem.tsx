import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      className="bg-white rounded-xl p-4 mb-3"
      onPress={() => setExpanded(!expanded)}
      activeOpacity={0.7}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-base font-semibold text-gray-900 flex-1 mr-2">
          {question}
        </Text>
        <Feather
          name={expanded ? "chevron-up" : "chevron-down"}
          size={20}
          color="#00E5A0"
        />
      </View>
      {expanded && (
        <Text className="text-sm text-gray-600 mt-3 leading-6">{answer}</Text>
      )}
    </TouchableOpacity>
  );
}
