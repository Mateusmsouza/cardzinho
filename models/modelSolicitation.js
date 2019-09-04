const dataType = require('sequelize');

module.exports = (database) => {
  return database.define('SOLICITATIONS', {
    status: {
      type: dataType.STRING(8)
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
    document: {
      type: dataType.STRING(11),
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
      type: dataType.REAL,
    }
  })
}