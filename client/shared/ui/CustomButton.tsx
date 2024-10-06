import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

export const Button = ({
  title,
  onPress,
  containerStyles,
  textStyles,
  isLoading
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center  ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
