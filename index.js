const express = require("express");
const app = express();
const cors = require("cors");
const request = require("request");

app.use(cors());

app.get("/:month/:day", (req, res) => {
  request(
    "http://numbersapi.com/" + req.params.month + req.params.day + "/date",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    }
  );
});

app.listen(8000);
