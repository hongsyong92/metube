import express from "express";

const PORT = 4000;

const app = express();

// 어떤 메소드로 어떤 url 로 가는지 알려주는 미들웨어
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    res.send("<h1>Not Allowed</h1>");
  }
  console.log("next");
  next();
};

const handleHome = (req, res) => {
  return res.send("home");
};

const handleProtected = (req, res) => {
  return res.send("private");
};

// app.use를 맨위에 놓고 미들웨어를 주면 모든 url에서 미들웨어 사용가능
app.use(logger);
app.use(privateMiddleware);

app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
