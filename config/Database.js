import {Sequelize} from "sequelize";
import dotenv from "dotenv";

// load .env
dotenv.config()

const db_username = process.env.DATABASE_USERNAME;
const db_password = process.env.DATABASE_PASSWORD;
const db_database = process.env.DATABASE_DATABASE;
const db_host = process.env.DATABASE_HOST;
const db_port = process.env.DATABASE_PORT;

const db = new Sequelize(db_database, db_username, db_password,{
    host: db_host,
    port: db_port,
    dialect: 'mysql'
});

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
  
export default db;