import UersController from './users.controllers';
import * as Schemas from './users.schemas';

const controller = new UersController();

export default [
  {
    method: 'GET',
    path: '/users',
    handler: controller.list,
    config: {
      auth: false,
      tags: ['api', 'users']
    }
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: controller.detail,
    config: {
      auth: false,
      tags: ['api', 'users'],
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/users',
    handler: controller.create,
    config: {
      auth: false,
      tags: ['api', 'users'],
      validate: Schemas.create
    }
  },
  {
    method: 'POST',
    path: '/users/login',
    handler: controller.login,
    config: {
      auth: false,
      tags: ['api', 'users'],
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: controller.update,
    config: {
      auth: false,
      tags: ['api', 'users'],
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: controller.destroy,
    config: {
      auth: false,
      tags: ['api', 'users'],
      validate: Schemas.detail
    }
  }
];
