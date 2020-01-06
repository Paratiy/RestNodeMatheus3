import CategoriesController from './categories.controllers';
import * as Schemas from './categories.schemas';

const controller = new CategoriesController();

export default [
  {
    method: 'GET',
    path: '/categories',
    handler: controller.list,
    config: {
      auth: false,
      tags: ['api', 'categories']
    }
  },
  {
    method: 'GET',
    path: '/categories/{id}',
    handler: controller.detail,
    config: {
      auth: false,
      tags: ['api', 'categories'],
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/categories',
    handler: controller.create,
    config: {
      auth: false,
      tags: ['api', 'categories'],
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/categories/{id}',
    handler: controller.update,
    config: {
      auth: false,
      tags: ['api', 'categories'],
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/categories/{id}',
    handler: controller.destroy,
    config: {
      auth: false,
      tags: ['api', 'categories'],
      validate: Schemas.detail
    }
  }
  
];
