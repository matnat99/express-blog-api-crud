const express = require("express");
const postValidationId = require("../middlewares/paramsValidationId.js");
const postController = require("../controllers/postController.js");

const router = express.Router();

// Index
router.get("/", postController.index);

// Show
router.get("/:id", postValidationId, postController.show);

// Store
router.post("/", postController.store);

// Update
router.put("/:id", postValidationId, postController.update);

// Modify
router.patch("/:id", postValidationId, postController.modify);

// Destroy
router.delete("/:id", postValidationId, postController.destroy);

module.exports = router;
