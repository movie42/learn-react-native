import { Prisma } from "@prisma/client";

const globalErrorHandler = (err, req, res, next) => {
  console.log("🚨", err); // 에러 로깅

  // Prisma 관련 에러 핸들링
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // Prisma 클라이언트 에러 유형에 따른 응답 설정
    switch (err.code) {
      case "P2002":
        return res.status(400).json({
          status: "error",
          message: "Unique constraint failed on field"
        });
      default:
        return res.status(500).json({
          status: "error",
          message: "Database error occurred"
        });
    }
  }

  // 다른 일반적인 에러 처리
  res.status(500).json({
    status: "error",
    message: err.message || "Internal server error"
  });
};

export default globalErrorHandler;
