import { instances } from 'hapi-sequelizejs';
import { getObjectOr404 } from '../utils/database.utils';

const Order = instances.getModel('order');

export default class OrdersDAO {

  async findAll(where) {
    return Order.findAll({ where });
  }

  async findByID(id) {
    return getObjectOr404(Order, { where: { id } });
  }

  async create(data) {
    return Order.create(data);
  }

  async update(where, data) {
    const Order = await this.findByID(where)

    return await Order.update(data);
  }

  async destroy(where) {
    const Order = await this.findByID(where);

    return Order.destroy();
  }
}
