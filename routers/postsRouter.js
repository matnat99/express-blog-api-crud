const express = require("express");
const postValidationId = require("../middlewares/paramsValidationId.js");
const checkPostExists = require("../middlewares/checkPostExists.js");
const postController = require("../controllers/postController.js");

const router = express.Router();

// Middleware validatore ID
router.use("/:id", postValidationId);

// Middleware validatore post esistente
router.use("/:id", checkPostExists);

// Index
router.get("/", postController.index);

// Show
router.get("/:id", postController.show);

// Store
router.post("/", postController.store);

// Update
router.put("/:id", postController.update);

// Modify
router.patch("/:id", postController.modify);

// Destroy
router.delete("/:id", postController.destroy);

module.exports = router;
