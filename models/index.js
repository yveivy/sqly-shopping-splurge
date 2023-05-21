// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {
  foreignKey: 'category_id',
  
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through: ProductTag,
  
});

Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through: ProductTag,
 
});

// We package our two models and export them as an object so we can import them together and use their proper names
module.exports = { Driver, License };// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};