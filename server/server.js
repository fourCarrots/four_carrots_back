import { createServer } from "http";
import cors from "cors";
import express from "express";

const port = 3000;
const app = express();
const server = createServer(app);

// express 기본 설정
app.use(cors());
app.use(express.json());

// test
app.get("/", (req, res) => {
    res.send("안녕하세요 ㅎㅎ");
});

app.get("/api", (req, res) => {
    var text = "api 요청이 왔어요~~"
    res.send(text)
});

app.get("/env_test", (req, res) => {
    res.send(process.env.SECRETS_ENV);
});

server.listen(port, () => console.log(`접속 완료`));