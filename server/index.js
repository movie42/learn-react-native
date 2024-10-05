require("dotenv").config(); // .env 파일 로드
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json()); // JSON 파싱
app.use(express.urlencoded({ extended: true })); // URL 인코딩된 데이터 파싱
app.use(helmet()); // 기본 보안 설정 추가
app.use(morgan("dev")); // HTTP 요청 로깅

// CORS 설정
app.use(
  cors({
    origin: "*", // 모든 도메인 허용. 실제 사용 시 특정 도메인만 허용하는 것이 좋음
    methods: ["GET", "POST", "PUT", "DELETE"], // 허용할 HTTP 메서드
    allowedHeaders: ["Content-Type", "Authorization"] // 허용할 헤더
  })
);

app.post("/users", async (req, res) => {
  const user = await prisma.user.create({ data: { name: req.body.name } });
  res.json(user);
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
