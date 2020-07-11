const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const { urlencoded, json } = require("body-parser");
const { unregistered, loged } = require("./routes");

const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());
app.use("/api", unregistered);
app.use("/api", loged);

const PORT = process.env.PORT || 5000;

mongoose.connect(
  process.env.MONGODB_URI || config.get("MongoURI"),
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (error) => {
    if (error) throw error;
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`Ther server has started on port ${PORT}`));
