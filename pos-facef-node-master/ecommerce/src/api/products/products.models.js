import { Model } from 'sequelize/types';
import Bcrypt from 'bcryptjs';

export default (sequelize, dataTypes) => {
  class Product extends Model {}

  Product.init({
    description: dataTypes.STRING,
    quantity: dataTypes.STRING,
    value: dataTypes.STRING,
    category: dataTypes.STRING
  }, { sequelize, modelName: 'product', tableName: 'products' });

  Product.associate = models => {
    models.product.hasMany(models.order, { as: 'orders' });
 };
 
  Product.addHook('beforeCreate', async (user) => {
    const hash = await Bcrypt.hash(user.password, 10);

    user.password = hash;
  });

  return Product;
}
