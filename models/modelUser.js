const dataType = require('sequelize');

module.exports = (database) => {
    return database.define('USERS', {
    name : {
      type: dataType.STRING,
      primarykey: true,
      unique: 'datauser'
    },
    lasname : {
      type: dataType.STRING,
      unique: 'datauser'
    },
    address: {
      type: dataType.STRING,
      unique: 'datauser'
    },
    score: {
      type: dataType.INTEGER,
      length: 4
    },
    budget: {
      type: dataType.REAL
    },
    credit: {
      type: dataType.FLOAT,
      length: 7
    }
  });
}

//module.exports = (database) => user(database);