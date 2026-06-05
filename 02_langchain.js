//환경변수 불러오기
const dotenv = require("dotenv");
dotenv.config();

//의존성
const express = require("express");
const {} = require("@langchain/core");

// 서버 세팅
const PORT = process.env.PORT_01 ?? 3000;
const app = express();

//middleware
app.use(express.json());

//routher, endpoint...
app.post("/chat", async (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

//listener
app.listen(PORT, () => {
  console.log(`${PORT}에서 Listen 중`);
});
