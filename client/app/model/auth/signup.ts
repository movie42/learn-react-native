import { z } from "zod";

export const signUpSchema = z.object({
  email: z
    .string({ message: "이메일은 필수 입력 사항입니다." })
    .email({ message: "이메일을 입력해주세요." }),
  password: z
    .string({ message: "비밀번호는 필수 입력 사항입니다." })
    .min(6, { message: "비밀번호는 최소 6자리보다 길어야합니다." }),
  username: z.string().min(3, { message: "사용자 이름을 입력해주세요." })
});

export type SignUpSchemaFormData = z.infer<typeof signUpSchema>;
