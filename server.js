const express = require("express");
const morgan = require("morgan");
const arcanaRouter = require("./routes/arcanaRouter");
const characterRouter = require("./routes/characterRouter");
const enemyRouter = require("./routes/enemyRouter");
const passiveRouter = require("./routes/passiveRouter");
const pickupRouter = require("./routes/pickupRouter");
const powerUpRouter = require("./routes/powerUpRouter");
const relicRouter = require("./routes/relicRouter");
const stageRouter = require("./routes/stageRouter");
const weaponRouter = require("./routes/weaponRouter");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/arcanas", arcanaRouter);
app.use("/characters", characterRouter);
app.use("/enemies", enemyRouter);
app.use("/passives", passiveRouter);
app.use("/pickups", pickupRouter);
app.use("/powerUps", powerUpRouter);
app.use("/relics", relicRouter);
app.use("/stages", stageRouter);
app.use("/weapons", weaponRouter);

app.use(express.static(_dirname + "/public"));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
