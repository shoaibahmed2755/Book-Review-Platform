const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send('Access denied');
  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = await User.findById(decoded.userId);
    next();
  } catch (err) {
    res.status(401).send('Invalid token');
  }
};

module.exports = authMiddleware;