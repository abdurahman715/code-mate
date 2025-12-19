const express = require("express");
const app = express();
app.use("/hello", (req, res) => {
  res.send("Helloo from the server");
});
app.use("/hey", (req, res) => {
  res.send("hey from the server");
});
app.listen(7777, () => {
  console.log("Server started running on port 7777");
});
