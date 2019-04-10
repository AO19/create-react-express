// import our express app
const app = require("./server");

// set running port
app.set("port", process.env.PORT || 5000);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});
