const express = require("express");
const router = express.Router();
const { getAll, create, update, delete: remove } = require("../controller/dataController");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, getAll);
router.post("/", auth, create);
router.put("/:id", auth, update);
router.delete("/:id", auth, remove);

module.exports = router;
