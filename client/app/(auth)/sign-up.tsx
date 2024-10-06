import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View
} from "react-native";

import { SignUpForm } from "@/features/auth/SignUpForm";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../shared/constants";

const SignUp = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ flexGrow: 1 }}>
          <View className="w-full justify-center h-full px-4 my-6">
            <Image
              source={images.logo}
              resizeMode="contain"
              className="w-[115px] h-[35px]"
            />
            <Text className="text-2xl text-white mt-10 font-psemibold">
              Sign Up to Aora
            </Text>
            <SignUpForm />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Have an account already?
              </Text>
              <Link
                href="/sign-in"
                className="text-lg font-psemibold text-secondary"
              >
                Sign In
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
