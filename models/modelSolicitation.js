const dataType = require('sequelize');

module.exports = (database) => {
  return database.define('SOLICITATIONS', {
    status: {
      type: dataType.STRING
    },
    name : {
      primarykey: true,
      type: dataType.STRING,
    },
    lastname : {
      primarykey: true,
      type: dataType.STRING,
    },
    address: {
      primarykey: true,
      type: dataType.STRING,
    },
    score: {
      type: dataType.INTEGER,
      length: 4
    },
    budget: {
      type: dataType.REAL
    },
    credit: {
      primarykey: true,
      type: dataType.INTEGER,
    }
  })
}