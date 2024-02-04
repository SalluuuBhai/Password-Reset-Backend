require("dotenv").config();

DB_NAME = "PasswordReset";
DB_URL = `mongodb+srv://mdsalmanfaris03:salman3510@cluster0.zf8pngn.mongodb.net/${DB_NAME}`;

module.exports = DB_URL;
