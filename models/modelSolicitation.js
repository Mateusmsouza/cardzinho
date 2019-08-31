const dataType = require('sequelize');

module.exports = (database) => {
  return database.define('SOLICITATIONS', {
    user: {
      type: dataType.STRING,
      primarykey: true
    },
    status: {
      type: dataType.STRING
    },
    data: {
      type: dataType.DATE
    }
  })
}

 //= (database) => solicitation(database);