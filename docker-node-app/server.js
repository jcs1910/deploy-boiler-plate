const express = require("express");
const redis = require("redis");

const app = express();

// 레디스 클라이언트 생성
const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});

client.set("number", 0);

app.get("/", (req, res) => {
  client.get("number", (err, number) => {
    client.set("number", +number + 1);
    res.send(`숫자가 1씩 증가합니다. 숫자 ${number}`);
  });
});

const port = 8080;
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
