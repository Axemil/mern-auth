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

const PORT = process.env.PORT || config.get("PORT") || 5000;

const start = async () => {
  try {
    await mongoose.connect(
      config.get("MongoURI"),
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (error) => {
        if (error) throw error;
      }
    );
    app.listen(PORT, () =>
      console.log(`Ther server has started on port ${PORT}`)
    );
  } catch (e) {
    console.log(e);
    process.emit(1);
  }
};

start();
