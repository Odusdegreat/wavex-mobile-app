import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  icon?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
}

export default function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  icon,
  secureTextEntry,
  editable = true,
}: InputFieldProps) {
  return (
    <View className="mb-4">
      <Text className="text-sm font-semibold text-gray-700 mb-2">{label}</Text>
      <View className="flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
        {icon && (
          <Feather name={icon as any} size={20} color="#9CA3AF" style={{ marginRight: 12 }} />
        )}
        <TextInput
          className="flex-1 text-base text-gray-900"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={secureTextEntry}
          editable={editable}
        />
      </View>
    </View>
  );
}