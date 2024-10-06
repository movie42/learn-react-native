import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

import { SignUpForm } from "@/features/auth/SignUpForm";
import { SafeAreaView } from "react-native-safe-area-context";
import SignUpFooter from "./ui/SignUpFooter";
import SignUpHeader from "./ui/SignUpHeader";

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
            <SignUpHeader />
            <SignUpForm />
            <SignUpFooter />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
