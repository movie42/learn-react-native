import { http } from "@/shared";
import { useMutation } from "@tanstack/react-query";

interface SignUpBody {
  username: string;
  email: string;
  password: string;
}
const signup = (body: SignUpBody) => {
  return http.post("/auth/signup", body);
};

export const useSignUp = () => {
  return useMutation({ mutationFn: (body: SignUpBody) => signup(body) });
};
