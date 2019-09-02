const Sequelize = require('sequelize');

module.exports = () => {
  if (process.env.DATABASE_URL){
    return new Sequelize(process.env.DATABASE_URL);
  }else{
    return new Sequelize(
      process.env.DATABASE || 'cardzinho',
      process.env.DATABASE_USER || 'mateus',
      process.env.DATABASE_PASSWORD || 1234,
      {
        host: process.env.DATABASE_URL || '127.0.0.1',
        dialect: 'postgres',
      }
    );
  }
  
}
