const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ASTHoDwCoMlhlhSEmEY2rYO4icpB-CVP4PFIX1I1Sq0VAFXFXaL8xf8viShKZz7ZZ5cgu1AhN2tzlwam",
  client_secret: "EMKZwNnlYGhh8tXsmhyHacHyOzRF9XeKXPb4sna8D5fhhGY96AAK1TnupriI9Jl5-vMbHOSqIEq1JDd_",
});

module.exports = paypal;
