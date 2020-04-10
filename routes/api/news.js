const router = require("express").Router();
const newsController = require("../../controllers/newsController");

// Matches with "/api/news"
router.route("/")
  .get(newsController.findAll)
  .post(newsController.create)
  .delete(newsController.remove);

// Matches with "/api/news/:id"


module.exports = router;
