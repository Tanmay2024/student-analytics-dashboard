const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const studentRoutes =
require("./routes/studentRoutes");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {

  console.log(
    "MongoDB Connected"
  );

})
.catch((error) => {

  console.log(error);

});

app.get("/", (req, res) => {

  res.send(
    "Student Analytics API Running"
  );

});

const PORT =
process.env.PORT || 5000;

app.use(
  "/api/students",
  studentRoutes
);

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});