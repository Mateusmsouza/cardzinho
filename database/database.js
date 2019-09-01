const Sequelize = require('sequelize');

module.exports = () => {
  return new Sequelize(
    process.env.DATABASE || 'cardzinho',
    process.env.DATABASE_USER || 'mateus',
    process.env.DATABASE_PASSWORD || 1234,
    {
      dialect: 'postgres',
    },
  );
}
