import { CREATED, NO_CONTENT } from 'http-status';
import CategoriesDAO from './categories.dao';

const categoriesDAO = new CategoriesDAO();

export default class CategoriesController {

  async list({ params }, h) {
    return await categoriesDAO.findAll(params);
  }

  async detail({ params }, h) {
    return await categoriesDAO.findByID(params);
  }

  // async create({ params, payload }, h) {
  //   const { postId } = params;
  //   const tag = await categoriesDAO.create({ ...payload, postId })

  //   return h.response(tag).code(CREATED);
  // }

  async create({ payload }, h) {
    console.log("CategoriesController.create -----------------------------------------");
    const category = await categoriesDAO.create(payload);

    return h.response(category).code(CREATED);
  }

  async update({ params, payload }, h) {
    return await categoriesDAO.update(params, payload);
  }


  async destroy({ params }, h) {
    await categoriesDAO.destroy(params);

    return h.response().code(NO_CONTENT);
  }
}
