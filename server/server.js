const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");

const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");
const dotenv = require('dotenv')


const commonFeatureRouter = require("./routes/common/feature-routes");
const subscriptionRoutes = require("./routes/newsletter/subscription");
const contactRoutes = require("./routes/contact/contact");

//create a database connection -> u can also
//create a separate file for this and then import/use that file here

mongoose
  .connect(`${process.env.MONGODB_URL}`)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));



const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 5000;
=======
const PORT = process.env.PORT || 4002;
>>>>>>> ea81859248473b7b0deb991bc69e9f5c709f04c6

app.use(
  cors({
    origin: "https://trendify-rent-the-trend.netlify.app",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.use('/api', subscriptionRoutes);

app.use("/api/common/feature", commonFeatureRouter);
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));