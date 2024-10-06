import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignUpFooter = () => {
  return (
    <View className="justify-center pt-5 flex-row gap-2">
      <Text className="text-lg text-gray-100 font-pregular">
        Have an account already?
      </Text>
      <Link href="/sign-in" className="text-lg font-psemibold text-secondary">
        Sign In
      </Link>
    </View>
  );
};

export default SignUpFooter;
