import Lab from '@hapi/lab';
import { expect } from '@hapi/code';
import { BAD_REQUEST, CREATED, NO_CONTENT, NOT_FOUND, OK } from 'http-status';
import { init } from '../../../src/config/server.config';
import { getToken, serverInject } from '../../test.utils';

const { before, after, describe, it } = exports.lab = Lab.script();

describe('Routes /products', () => {
  let server;
  let authorization;

  before(async () => {
    server = await init();
    authorization = await getToken(server);
  });

  after(async () => {
    await server.stop();
  })

  describe('GET /products', () => {
    it('returns 200 HTTP status code', async () => {
      const res = await serverInject({
        method: 'GET',
        url: '/products',
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(OK);
    });
  });

  describe('POST /products', () => {
    it('returns 201 HTTP status code', async () => {
      const res = await serverInject({
        method: 'POST',
        url: '/products',
        headers: { authorization },
        payload: {
          email: 'aluno@unifacef.com.br',
          password: 'abc123'
        }
      }, server);

      expect(res.statusCode).to.equal(CREATED);
    });

    it('returns 400 HTTP status code when payload is invalid', async () => {
      const res = await serverInject({
        method: 'POST',
        url: '/products',
        headers: { authorization },
        payload: {
          title: 'Novo post'
        }
      }, server);

      expect(res.statusCode).to.equal(BAD_REQUEST);
    });
  });

  describe('GET /products/{id}', () => {
    let post;

    before(async () => {
      const res = await serverInject({
        method: 'POST',
        url: '/products',
        headers: { authorization },
        payload: {
          email: 'aluno@unifacef.com.br',
          password: 'abc123'
        }
      }, server);

      post = res.payload;
    });

    it('returns 200 HTTP status code', async () => {
      const res = await serverInject({
        method: 'GET',
        url: `/products/${post.id}`,
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(OK);
    });

    it('returns 400 HTTP status code when id is not a number', async () => {
      const res = await serverInject({
        method: 'GET',
        url: '/products/asdf',
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(BAD_REQUEST);
    });

    it('returns 404 HTTP status code when post does not exist', async () => {
      const res = await serverInject({
        method: 'GET',
        url: '/products/0',
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(NOT_FOUND);
    });
  });

  describe('PUT /products/{id}', () => {
    let post;

    before(async () => {
      const res = await serverInject({
        method: 'POST',
        url: '/products',
        headers: { authorization },
        payload: {
          email: 'aluno@unifacef.com.br',
          password: 'abc123'
        }
      }, server);

      post = res.payload;
    });

    it('returns 200 HTTP status code', async () => {
      const res = await serverInject({
        method: 'PUT',
        url: `/products/${post.id}`,
        headers: { authorization },
        payload: {
          email: 'aluno@unifacef.com.br',
          password: 'abc123'
        }
      }, server);

      expect(res.statusCode).to.equal(OK);
    });

    it('returns 400 HTTP status code when payload is invalid', async () => {
      const res = await serverInject({
        method: 'PUT',
        url: `/products/${post.id}`,
        headers: { authorization },
        payload: {
          email: 'aluno@unifacef',
          password: 'abc123'
        }
      }, server);

      expect(res.statusCode).to.equal(BAD_REQUEST);
    });

    it('returns 404 HTTP status code when post does not exist', async () => {
      const res = await serverInject({
        method: 'PUT',
        url: '/products/0',
        headers: { authorization },
        payload: {
          email: 'aluno@unifacef.com.br',
          password: 'abc123'
        }
      }, server);

      expect(res.statusCode).to.equal(NOT_FOUND);
    });
  });

  describe('DELETE /products/{id}', () => {
    let post;

    before(async () => {
      const res = await serverInject({
        method: 'POST',
        url: '/products',
        headers: { authorization },
        payload: {
          email: 'aluno@unifacef.com.br',
          password: 'abc123'
        }
      }, server);

      post = res.payload;
    });

    it('returns 204 HTTP status code', async () => {
      const res = await serverInject({
        method: 'DELETE',
        url: `/products/${post.id}`,
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(NO_CONTENT);
    });

    it('returns 400 HTTP status code when id is not a number', async () => {
      const res = await serverInject({
        method: 'DELETE',
        url: '/products/asdf',
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(BAD_REQUEST);
    });

    it('returns 404 HTTP status code when post does not exist', async () => {
      const res = await serverInject({
        method: 'DELETE',
        url: `/products/${post.id}`,
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(NOT_FOUND);
    });
  });
});
