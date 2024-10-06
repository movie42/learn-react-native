import bcrypt from "bcryptjs";
import prisma from "../../orm/service/prisma.service";

export const createUser = async ({ username, email, password }) => {
  const existingUser = await prisma.user.findUnique({
    where: { username }
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      username,
      password: hashedPassword
    }
  });

  return newUser;
};
