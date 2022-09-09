const User = require('./User');
const Blog = require('./Blog');
const Comments = require('./Comments');

User.hasMany(Blog, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'userId'
});

Blog.hasMany(Comments, {
  foreignKey: 'blogId',
  onDelete: 'CASCADE'
});

module.exports = { User, Blog, Comments };
