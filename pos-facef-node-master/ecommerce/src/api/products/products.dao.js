import { instances } from 'hapi-sequelizejs';
import { getObjectOr404 } from '../utils/database.utils';

const Product = instances.getModel('product');

export default class ProductsDAO {

  async findAll(where) {
    return Product.findAll({ where });
  }

  async findByID(id) {
    return getObjectOr404(Product, { where: { id } });
  }

  async create(data) {
    console.log("Products.dao.create------------------------------------");
    
    return Product.create(data);
  }

  async update(where, data) {
    const Product = await this.findByID(where)

    return await Product.update(data);
  }

  async destroy(where) {
    const Product = await this.findByID(where);

    return Product.destroy();
  }
}
