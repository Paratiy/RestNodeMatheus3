import ProductsController from './products.controllers';
import * as Schemas from './products.schemas';

const controller = new ProductsController();

export default [
  {
    method: 'GET',
    path: '/products',
    handler: controller.list,
    config: {
      auth: false,
      tags: ['api', 'products']
    }
  },
  {
    method: 'GET',
    path: '/products/{id}',
    handler: controller.detail,
    config: {
      auth: false,
      tags: ['api', 'products'],
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/products',
    handler: controller.create,
    config: {
      auth: false,
      tags: ['api', 'products'],
      validate: Schemas.create
    }
  },
  {
    method: 'POST',
    path: '/products/login',
    handler: controller.login,
    config: {
      auth: false,
      tags: ['api', 'products'],
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/products/{id}',
    handler: controller.update,
    config: {
      auth: false,
      tags: ['api', 'products'],
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/products/{id}',
    handler: controller.destroy,
    config: {
      auth: false,
      tags: ['api', 'products'],
      validate: Schemas.detail
    }
  }
];
