const dataType = require('sequelize');

module.exports = (database) => {
    return database.define('USERS', {
    id: {
      primaryKey: true,
      omitNull: true,
      type: dataType.INTEGER,
      onDelete: 'CASCADE'
    },
    name : {
      type: dataType.STRING,
      primarykey: true,
      unique: 'datauser'
    },
    lastname : {
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
      type: dataType.INTEGER,
    }
  });
}

//module.exports = (database) => user(database);