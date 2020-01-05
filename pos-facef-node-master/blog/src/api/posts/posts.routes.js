import PostsController from './posts.controllers';
import * as Schemas from './posts.schemas';

const controller = new PostsController();

export default [
  {
    method: 'GET',
    path: '/posts',
    handler: controller.list,
    config: {
      auth: false,
      tags: ['api', 'posts'],
    }
  },
  {
    method: 'GET',
    path: '/posts/{id}',
    handler: controller.detail,
    config: {
      auth: false,
      tags: ['api', 'posts'],
      //validate: Schemas.detail
    }
  },
  {
    method: 'POST',
    path: '/posts',
    handler: controller.create,
    config: {
      auth: false,
      tags: ['api', 'posts'],
      //validate: Schemas.create
    }
  },
  {
    method: 'PUT',
    path: '/posts/{id}',
    handler: controller.update,
    config: {
      auth: false,
      tags: ['api', 'posts'],
      //validate: Schemas.update
    }
  },
  {
    method: 'DELETE',
    path: '/posts/{id}',
    handler: controller.destroy,
    config: {
      auth: false,
      tags: ['api', 'posts'],
      //validate: Schemas.detail
    }
  }
];
