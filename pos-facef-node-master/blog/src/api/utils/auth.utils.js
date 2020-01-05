import Boom from '@hapi/boom';
import { instances } from 'hapi-sequelizejs';
import Bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
import Env from '../../config/environment.config';
import { getObjectOr404 } from '../utils/database.utils';

export function getToken(payload, options = {}) {
  console.log("auth.utils.getToken---------------------------------------------");
  //return JWT.sign(payload, Env.JWT_SECRET, { expiresIn: Env.JWT_EXPIRES_IN, ...options });
  return JWT.sign(payload, Env.JWT_SECRET, { expiresIn: '356d', ...options });
}

export async function authenticate({ email, password }) {
  console.log("auth.utils.authenticate---------------------------------------------");
  const model = instances.getModel('user');
  const user = await getObjectOr404(model, { where: { email }});
  const isValid = await Bcrypt.compare(password, user.password);

  if (!isValid) {
    console.log("auth.utils.authenticate.!isValid---------------------------------------------");
    throw Boom.notFound();
  }

  return user;
}
