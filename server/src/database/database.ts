import { Error } from "sequelize";

const { Sequelize } = require('sequelize');





const sequelize = new Sequelize('dashboard-clone', 'root', 'ash@Compunnel09', {
  host: 'localhost',
  dialect: 'mysql'
});
sequelize.authenticate()
.then(() => {
  console.log('Database connection established successfully.');
})
.catch((err : Error) => {
  console.error('Unable to connect to the database:', err);
});


export default sequelize;

