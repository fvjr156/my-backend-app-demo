import { Sequelize } from "sequelize";

const sqlz = new Sequelize({
    dialect: "sqlite",
    storage: "./mybackendappdemo.db",
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
    }
});

export default sqlz;