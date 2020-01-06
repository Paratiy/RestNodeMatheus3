import { instances } from 'hapi-sequelizejs';
import { getObjectOr404 } from '../utils/database.utils';

const category = instances.getModel('category');

export default class CategoriesDAO {

  async findAll(where) {
    return category.findAll({ where });
  }

  async findByID(where) {
    return getObjectOr404(category, { where });
  }

  async create(data) {
    return category.create(data);
  }

  async update(where, data) {
    const category = await this.findByID(where);

    return await category.update(data);
  }

  async destroy(where) {
    const category = await this.findByID(where);

    return category.destroy();
  }
}
