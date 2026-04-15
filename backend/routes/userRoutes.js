const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const { protect, authorizeRoles } = require("../middleware/authMiddleware");

// Admin / Manager
router.get("/", protect, authorizeRoles("admin", "manager"), getUsers);

// Admin only
router.post("/", protect, authorizeRoles("admin"), createUser);

// Admin / Manager / Self
router.put("/:id", protect, updateUser);

// Admin only
router.delete("/:id", protect, authorizeRoles("admin"), deleteUser);

// Get single user
router.get("/:id", protect, getUserById);

module.exports = router;