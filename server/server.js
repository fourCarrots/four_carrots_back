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
    res.send("안녕 ㅎㅎ");
});

server.listen(port, () => console.log(`접속 완료`));