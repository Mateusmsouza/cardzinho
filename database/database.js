const Sequelize = require('sequelize');

module.exports = () => {
  if (process.env.DATABASE_URL){
    return new Sequelize(process.env.DATABASE_URL);
  }else{
    return new Sequelize(
      'cardzinho',
      'mateus',
      1234,
      {
        dialect: 'postgres',
      }
    );
  }
  
}
