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
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'tags'
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'products'
 
});

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};