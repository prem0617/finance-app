const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: 'Email already in use' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ firstName, lastName, email, password: hashedPassword });
    const token = jwt.sign({ userId: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return res.status(201).json({ success: true, data: { token, user: { id: newUser._id, email: newUser.email, name: `${newUser.firstName} ${newUser.lastName}` } }, message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'An error occurred during registration', error: error.message });
  }
};