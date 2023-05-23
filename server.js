const express = require('express');
const routes = require('./routes');
const mysql = require('mysql2')
// import sequelize connection
const sequelize = require('./config/connection')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api', routes);
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on:${PORT}`);
// sync sequelize models to the database, then turn on the server
  sequelize.sync({force: false}).then(() => {
  console.log('Database synced');
  }).catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
});




