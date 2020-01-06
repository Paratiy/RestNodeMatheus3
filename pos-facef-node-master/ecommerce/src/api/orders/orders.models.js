import { Model } from 'sequelize/types';
import Bcrypt from 'bcryptjs';

export default (sequelize, dataTypes) => {
  class Order extends Model {}

  Order.init({
    user: dataTypes.STRING,
    value: dataTypes.STRING,
    product: dataTypes.STRING   
  }, { sequelize, modelName: 'order', tableName: 'orders' });

  Order.associate = models => {
     models.order.hasMany(models.product, { as: 'products' });
  };

  Order.addHook('beforeCreate', async (user) => {
    const hash = await Bcrypt.hash(user.password, 10);

    user.password = hash;
  });

  return Order;
}
