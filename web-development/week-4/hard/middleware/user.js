const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    try {
        const token = req.headers.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded) {
            req.userId = decoded.userId;
            next();
        } else {
            res.status(400).json({
                message: "not signed in"
            });
        }
    } catch(err) {
        console.log(err);
    }
}

module.exports = userMiddleware;