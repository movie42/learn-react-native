import { images } from "@/shared/constants";
import React from "react";
import { Image, Text } from "react-native";

const SignUpHeader = () => {
  return (
    <>
      <Image
        source={images.logo}
        resizeMode="contain"
        className="w-[115px] h-[35px]"
      />
      <Text className="text-2xl text-white mt-10 font-psemibold">
        Sign Up to Aora
      </Text>
    </>
  );
};

export default SignUpHeader;
