const Sequelize = require("sequelize");

const db = new Sequelize(
  `postgres://strangemaeweather@localhost:5432/bbdirectory`,
  { logging: false }
);

const Business = require("./Business")(db);

const connectToDB = async () => {
  try {
    await db.authenticate();
    console.log("Connected successfully");
    db.sync();
  } catch (err) {
    console.error(err);
    console.error("Panic! DB connection issue");
  }
};

connectToDB();

module.exports = { db, Business };
