const User = require("../models/User");

// 🔹 Get all users (Admin / Manager)
exports.getUsers = async (req, res) => {
  try {
    const { search, role, page = 1, limit = 10 } = req.query;

    const query = {};

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    if (role) {
      query.role = role;
    }

    const users = await User.find(query)
      .select("-password")
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await User.countDocuments(query);

    res.json({
      total,
      page: Number(page),
      users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Get single user
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Create user (Admin only)
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role, status } = req.body;

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const bcrypt = require("bcryptjs");
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      status,
      createdBy: req.user._id,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Update user
exports.updateUser = async (req, res) => {
  try {
    const { name, email, role, status } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 🚨 Restriction: user cannot update others unless admin/manager
    if (req.user.role === "user" && req.user._id.toString() !== user._id.toString()) {
      return res.status(403).json({ message: "Forbidden" });
    }

    user.name = name || user.name;
    user.email = email || user.email;

    if (req.user.role !== "user") {
      user.role = role || user.role;
      user.status = status || user.status;
    }

    user.updatedBy = req.user._id;

    await user.save();

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Delete / deactivate user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.status = "inactive";
    user.updatedBy = req.user._id;

    await user.save();

    res.json({ message: "User deactivated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};