const express = require("express");
const request = require("request");
const path = require("path");
const bodyParser = require("body-parser");
const enforce = require("express-sslify");
const router = require("./routes/index");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const { PORT = 3000, NODE_ENV = "development" } = process.env;

const IN_PROD = NODE_ENV === "production";

if (IN_PROD) {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use("/", router);

app.listen(PORT, console.log("Listening"));
