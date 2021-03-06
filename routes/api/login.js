const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/news"
router.route("/")
  .get(loginController.findAll)
  .post(loginController.create);

// Matches with "/api/news/:id"
router
  .route("/:id")
  .get(loginController.findById)
  .put(loginController.update)
  .delete(loginController.remove);

module.exports = router;
