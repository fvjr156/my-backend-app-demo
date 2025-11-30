import { DataTypes } from "sequelize";
import sqlz from "../config/database.js";

const SignLanguages = sqlz.define(
  "SignLanguages",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255],
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    tableName: "signlanguages",
  }
);

export default SignLanguages;
