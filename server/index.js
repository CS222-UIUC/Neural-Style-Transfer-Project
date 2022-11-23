const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const cors = require("cors");
const path = require("path");

app.use(cors());

app.use(
  "/api/model",
  express.static(path.join(__dirname, "style_transfer_tfjs"))
);

app.use("/api/content", express.static(path.join(__dirname, "content")));

app.get("/api", (req, res) => {
  res.json({ message: "Backend query received." });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
