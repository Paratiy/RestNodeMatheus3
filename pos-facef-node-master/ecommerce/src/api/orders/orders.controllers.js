import { CREATED, NO_CONTENT } from 'http-status';
import { authenticate, getToken } from '../utils/auth.utils';
import OrdersDAO from './orders.dao';

const ordersDAO = new OrdersDAO();

export default class OrdersController {

  async list(request, h) {
    return await ordersDAO.findAll();
  }

  async detail({ params }, h) {
    const { id } = params;
    return await ordersDAO.findByID(id);
  }

  async login({ payload }, h) {
    const user = await authenticate(payload);
    const token = getToken({
      id: user.id,
      email: user.email
    });

    return { user, token };
  }

  async create({ payload }, h) {
    const orders = await ordersDAO.create(payload);

    return h.response(orders).code(CREATED);
  }

  async update({ payload, params }, h) {
    const { id } = params;

    return await ordersDAO.update(id, payload);
  }

  async destroy({ params }, h) {
    const { id } = params;

    await ordersDAO.destroy(id);

    return h.response().code(NO_CONTENT);
  }
}
