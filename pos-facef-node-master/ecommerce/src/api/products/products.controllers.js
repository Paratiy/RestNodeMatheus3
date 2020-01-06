import { CREATED, NO_CONTENT } from 'http-status';
import { authenticate, getToken } from '../utils/auth.utils';
import ProductsDAO from './products.dao';

const productsDAO = new ProductsDAO();

export default class ProductsController {

  async list(request, h) {
    console.log("ProductsController.list -----------------------------------------");
    return await productsDAO.findAll();
  }

  async detail({ params }, h) {
    console.log("ProductsController.detail -----------------------------------------");
    const { id } = params;
    return await productsDAO.findByID(id);
  }

  async login({ payload }, h) {
    console.log("ProductsController.login -----------------------------------------");
    const user = await authenticate(payload);
    const token = getToken({
      id: user.id,
      email: user.email
    });

    return { user, token };
  }

  async create({ payload }, h) {
    console.log("ProductsController.create -----------------------------------------");
    const user = await productsDAO.create(payload);

    return h.response(user).code(CREATED);
  }

  async update({ payload, params }, h) {
    console.log("ProductsController.update -----------------------------------------");
    const { id } = params;

    return await productsDAO.update(id, payload);
  }

  async destroy({ params }, h) {
    console.log("ProductsController.destroy -----------------------------------------");
    const { id } = params;

    await productsDAO.destroy(id);

    return h.response().code(NO_CONTENT);
  }
}
