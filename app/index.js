const express = require("express");

const sequelize = require("./util/database");
const Post = require("./models/posts");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access_Control-Allow-Origin", "*");
  res.setHeader("Access_Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
  next();
});

app.use("/dev", require("./routes/dev"));
app.use("/posts", require("./routes/posts"));

(async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(process.env.EXTERNAL_PORT || 3001);
  } catch (err) {
    console.error(err);
  }
})();
