const path = require("path");
const router = require("express").Router();
const newsRoutes = require("./news");
const userRoutes = require("./user");
// Book routes
router.use("/news", newsRoutes);
router.use("/user", userRoutes);


// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;