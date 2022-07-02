const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const gen_report = require("./lighthouse_service");

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

app.get("/report", (req, res) => {
  const url = req.query.url;
  const device = req.query.device;
  console.log(req.query);
  gen_report(url, device)
    .then((report) => {
      res.send(report);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`boostyourspeed listening on port ${port}!`);
});
