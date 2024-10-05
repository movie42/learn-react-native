import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  title,
  onPress,
  containerStyles,
  textStyles,
  isLoading
}: CustomButtonProps) => {
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

export default CustomButton;
