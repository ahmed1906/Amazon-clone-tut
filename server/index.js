// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");

// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb+srv://ahmed:160302058@cluster0.gl3r2om.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
