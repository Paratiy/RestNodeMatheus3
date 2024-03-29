import { CREATED, NO_CONTENT } from 'http-status';
import { authenticate, getToken } from '../utils/auth.utils';
import UsersDAO from './users.dao';

const usersDAO = new UsersDAO();

export default class UsersController {

  async list(request, h) {
    console.log("UsersController.list -----------------------------------------");
    return await usersDAO.findAll();
  }

  async detail({ params }, h) {
    console.log("UsersController.detail -----------------------------------------");
    const { id } = params;
    return await usersDAO.findByID(id);
  }

  async login({ payload }, h) {
    console.log("UsersController.login -----------------------------------------");
    const user = await authenticate(payload);
    const token = getToken({
      id: user.id,
      email: user.email
    });

    return { user, token };
  }

  async create({ payload }, h) {
    console.log("UsersController.create -----------------------------------------");
    const user = await usersDAO.create(payload);

    return h.response(user).code(CREATED);
  }

  async update({ payload, params }, h) {
    console.log("UsersController.update -----------------------------------------");
    const { id } = params;

    return await usersDAO.update(id, payload);
  }

  async destroy({ params }, h) {
    console.log("UsersController.destroy -----------------------------------------");
    const { id } = params;

    await usersDAO.destroy(id);

    return h.response().code(NO_CONTENT);
  }
}
