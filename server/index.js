require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDatabase = require("./db/connect");
const errorHandlerMiddleware = require("./middleware/error");
const { serverCheck } = require('poll-server-check');


app.use(cors());
app.use(express.static("./public"));


// import routes
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const paymentRoute = require("./routes/payments");
const adminRoute = require("./routes/admin");
const brandRoute = require("./routes/brands");
const categoryRoute = require("./routes/category");
const { webhook } = require("./controllers/payments");
const { verifyToken, adminOnly } = require("./middleware/auth");

app.post("/webhook", express.raw({ type: "application/json" }), webhook);
app.use(express.json());

//using routes
app.use("/payment", verifyToken, paymentRoute);
app.use("/", userRoute);
app.use("/product", productRoute);
app.use("/cart", verifyToken, cartRoute);
app.use("/admin", adminOnly, adminRoute);
app.use("/brands", adminOnly, brandRoute);
app.use("/category", adminOnly, categoryRoute);

app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  res.json("404 Not Found");
});

serverCheck(app);

// Middleware for Errors
app.use(errorHandlerMiddleware);

const port = 8000;
const StartServer = async () => {
  try {
    app.listen(port,() => {
      console.log(`Server is running on http://localhost:${port}`);
    });

    await connectDatabase(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

StartServer();
