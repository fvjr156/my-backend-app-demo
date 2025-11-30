import sqlz from "../config/database.js";
import User from "./User.js";
import SignLanguages from "./SignLanguages.js";

export const initDB = async function () {
  try {
    await sqlz.authenticate();
    console.log("DB connection established successfully.");

    await sqlz.sync();
    console.log("Database synchronized successfully.");

    const userCount = await User.count();
    if (userCount === 0) {
      await User.create({
        username: "admin",
        password: "admin123",
      });
      console.log("Default user account created successfully.");
    }
  } catch (e) {
    console.error("Unable to initialize database: ", e);
    throw e;
  }
};

export { sqlz, User, SignLanguages };
