module.exports = (sequelize, type) => {
  return sequelize.define('comment', {
      id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: type.STRING,
      comment: type.STRING,
      confirmation: type.STRING,
      userId: type.INTEGER,
  })
}