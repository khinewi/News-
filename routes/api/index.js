const path = require("path");
const router = require("express").Router();
const newsRoutes = require("./news");
// const userRoutes = require("./user");
// News routes
// router.use("/login", loginRoutes);
router.use("/news", newsRoutes);
// router.use("/user", userRoutes);


module.exports = router;
