const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 8000 || process.env.PORT;

app.use(cors());
app.use(
  bodyParser.json({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`boostyourspeed listening on port ${port}!`);
});
