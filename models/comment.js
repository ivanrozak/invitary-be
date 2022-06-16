module.exports = (sequelize, type) => {
  return sequelize.define('comment', {
      id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: type.STRING,
      comment: type.STRING,
      // createdAt: {
      //   type: type.DATE,
      //   defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      // },
      userId: type.INTEGER,
  })
}