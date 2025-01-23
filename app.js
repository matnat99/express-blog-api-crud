const express = require("express");
const app = express();
const port = 3000;

// Routers
const postsRouter = require("./routers/postsRouter");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
