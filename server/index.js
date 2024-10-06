import SQLiteStore from "connect-sqlite3";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import authRouter from "./src/auth/routes/auth.router";
import globalErrorHandler from "./src/middleware/globalErrorHandler";

const SQLiteSessionStore = SQLiteStore(session);
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

const apiRouter = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// CORS 설정
app.use(
  cors({
    origin: "*"
  })
);

app.use(
  session({
    store: new SQLiteSessionStore({
      db: "sessions.sqlite3",
      dir: path.resolve(__dirname, "./prisma"),
      table: "sessions",
      ttl: 86400
    }),
    secret: "session", // 개발이라...그냥 session
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

app.use("/api", apiRouter);
apiRouter.use("/auth", authRouter);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
