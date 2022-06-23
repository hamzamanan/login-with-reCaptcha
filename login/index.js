const express = require("express");
const app = express();
const config = require("./App");
const { connectDatabase } = require("./database");
const userRouter = require("./login/routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/signup", userRouter);
// app.post("/post-test", (req, res) => {
//   console.log("Got body:", req.body);
//   res.sendStatus(200);
// });
// the above commented code works but the on in router is not working i guess
connectDatabase();
app.listen(config.PORT, () => {
  console.log(` app listening on port ${config.PORT}`);
});
