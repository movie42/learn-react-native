import { createUser } from "../service/auth.service";
export const signup = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    const user = await createUser({ username, password, email });
    req.session.user = {
      username: user.username,
      email: user.email,
      id: user.id
    };

    res.status(201).json({ message: "회원 가입이 완료되었습니다.", user });
  } catch (error) {
    next(error);
  }
};
