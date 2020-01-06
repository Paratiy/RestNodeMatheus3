import OrdersController from './orders.controllers';
import * as Schemas from './orders.controllers';

const controller = new OrdersController();

export default [
  {
    method: 'GET',
    path: '/orders',
    handler: controller.list,
    config: {
      auth: false,
      tags: ['api', 'orders']
    }
  },
  {
    method: 'GET',
    path: '/orders/{id}',
    handler: controller.detail,
    config: {
      auth: false,
      tags: ['api', 'orders'],
      validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/orders',
    handler: controller.create,
    config: {
      auth: false,
      tags: ['api', 'orders'],
      validate: Schemas.create
    }
  },
  {
    method: 'POST',
    path: '/orders/login',
    handler: controller.login,
    config: {
      auth: false,
      tags: ['api', 'orders'],
      validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/orders/{id}',
    handler: controller.update,
    config: {
      auth: false,
      tags: ['api', 'orders'],
      validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/orders/{id}',
    handler: controller.destroy,
    config: {
      auth: false,
      tags: ['api', 'orders'],
      validate: Schemas.detail
    }
  }
];
