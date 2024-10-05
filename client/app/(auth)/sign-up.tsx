import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

const SignUp = () => {
  const [form, setForm] = useState({ email: "", password: "", username: "" });
  const [isSubmitting, setSubmitting] = useState(false);
  const handleSubmit = () => {
    setSubmitting((pre) => !pre);
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white mt-10 font-psemibold">
            Sign Up to Aora
          </Text>
          <FormField
            title="Username"
            value={form.username}
            otherStyles="mt-10"
            onChangeText={(e) => setForm({ ...form, username: e })}
          />
          <FormField
            title="Email"
            value={form.email}
            otherStyles="mt-7"
            onChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            onChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign Up"
            onPress={handleSubmit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
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
    </SafeAreaView>
  );
};

export default SignUp;
