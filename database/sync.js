module.exports = (sequelize) => {
  return sequelize.sync()
                        .then(() => sequelize)
                        .catch((error) => console.log("Database error\n"+error));
} 