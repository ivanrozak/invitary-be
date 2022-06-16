const Sequelize = require('sequelize')
const AuthorModel = require('./models/author')
const BookModel = require('./models/book')
const UserModel = require('./models/user')
const CommentModel = require('./models/comment')
const { DATABASE_NAME, USERNAME, PASSWORD, HOST, PORT, DIALECT } = require('./constants')
const sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  port: PORT,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
const Book = BookModel(sequelize, Sequelize)
const Author = AuthorModel(sequelize, Sequelize)
const User = UserModel(sequelize, Sequelize)
const Comment = CommentModel(sequelize, Sequelize)
// Author has Many to book
Author.hasMany(Book)
User.hasMany(Comment)
sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created here!`)
  })

module.exports = {
  Author,
  Book,
  User,
  Comment
}