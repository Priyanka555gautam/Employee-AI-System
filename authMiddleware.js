import jwt from "jsonwebtoken";

const protect = async (req, res, next) => {
  try {

    const token = req.headers.authorization;

    // check token
    if (!token) {
      return res.status(401).json({
        message: "Access denied. No token provided",
      });
    }

    // verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch (error) {

    res.status(401).json({
      message: "Invalid token",
    });

  }
};

export default protect;