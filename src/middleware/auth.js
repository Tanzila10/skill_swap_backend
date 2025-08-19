import jwt from 'jsonwebtoken';

// Middleware to protect routes
const protectedRoutes = (roles = []) => {
    return async (req, res, next) => {
      // console.log("hello Auth")
      try {
          const authHeader = req.headers.authorization || req.headers.Authorization;
          // console.log("token", req.headers)
          if (!authHeader || !authHeader.startsWith('Bearer ')) {
              return res.status(401).json({ error: 'Unauthorized: No token provided' });
          }
  
          const token = authHeader.split(' ')[1];
          const decoded = jwt.verify(token, process.env.REFRESH_SECRET);
  
          if (roles.length > 0 && !roles.includes(decoded.role)) {
              return res.status(403).json({ error: 'Forbidden: Insufficient privileges' });
          }
          req.user = decoded; // Attach user info to request
          next();
  
      } catch (error) {
        console.error("Error in authentication middleware:", error);
        return res.status(401).json({
          status: false,
          error: 'Not authorized, token failed'
        });
      }
    };
  };

  export default protectedRoutes;