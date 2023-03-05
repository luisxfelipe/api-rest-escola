require("dotenv").config();

module.exports = {
  dialect: "mysql",
  host: process.env.DATABASE_HOST,
  port: process.env.DB_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  define: {
    timestamps: true,
    underscored: true,
    undefinedAll: true,
    createAt: "created_at",
    updateAt: "updated_at",
  },
  dialectOptions: {
    timezone: "America/Sao_Paulo",
  },
  timezone: "America/Sao_Paulo",
};
