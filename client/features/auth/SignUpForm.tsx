import { useSignUp } from "@/api/user.query";
import { signUpSchema, SignUpSchemaFormData } from "@/app/model";
import { Button, FormField } from "@/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput } from "react-native";

export const SignUpForm = () => {
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchemaFormData>({ resolver: zodResolver(signUpSchema) });

  const textInputsRef = useRef<(TextInput | null)[]>([]);

  const { mutate: signUpMutate } = useSignUp();

  const onSubmit = async (data: SignUpSchemaFormData) => {
    const formData = data;
    setSubmitting(true);
    signUpMutate(formData, {
      onSuccess: (data) => {
        console.log(data);
        setSubmitting(false);
      },
      onError: (error) => {
        console.log(error);
        setSubmitting(false);
      }
    });
  };
  return (
    <>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <FormField
            ref={(ref) => (textInputsRef.current[0] = ref)}
            title="Email"
            value={value}
            otherStyles="mt-7"
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => textInputsRef.current[1]?.focus()}
            blurOnSubmit={false}
            textContentType="oneTimeCode"
            autoComplete="off"
          />
        )}
      />
      {errors.email ? (
        <Text className="text-red-400">{errors.email.message}</Text>
      ) : null}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <FormField
            ref={(ref) => (textInputsRef.current[1] = ref)}
            title="Password"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            otherStyles="mt-7"
            returnKeyType="done"
            textContentType="oneTimeCode"
            autoComplete="off"
            secureTextEntry
          />
        )}
      />
      {errors.password ? (
        <Text className="text-red-400">{errors.password.message}</Text>
      ) : null}

      <Button
        title="Sign Up"
        onPress={handleSubmit(onSubmit)}
        containerStyles="mt-7"
        isLoading={isSubmitting}
      />
    </>
  );
};
