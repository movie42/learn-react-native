import React, { forwardRef, useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View
} from "react-native";

import { icons } from "../constants";

export interface FormFieldProps extends TextInputProps {
  title: string;
  otherStyles?: string;
}

export const FormField = forwardRef<TextInput, FormFieldProps>(
  ({ title, otherStyles, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <View className={`space-y-2 ${otherStyles}`}>
        <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
        <View
          className={`border-2 border-black-200 w-full h-16 px-4
                    bg-black-100 rounded-2xl
                    focus:border-secondary items-center flex-row`}
        >
          <TextInput
            ref={ref}
            className="flex-1 text-white font-psemibold text-base"
            placeholderTextColor="#7b7b8b"
            secureTextEntry={title === "Password" && !showPassword}
            {...props}
          />
          {title === "Password" ? (
            <TouchableOpacity onPress={() => setShowPassword((pre) => !pre)}>
              <Image
                source={!showPassword ? icons.eye : icons.eyeHide}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
);
