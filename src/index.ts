import * as express from "express";
import * as cors from "cors";

const app = express();
app.use(cors());
app.get("/api", (req, res) => {
  res.json({
    msg: "Edit src/App.js and save to reload",
  });
});

app.listen(4000);
