import * as Joi from '@hapi/joi';

const params = Joi.object({
  id: Joi.number().required()
});

// const payload = Joi.object({
//   email: Joi.string().email().required(),
//   password: Joi.string().min(6).required()
// })

const payload = Joi.object({
  description: Joi.string().min(3).required(),
  quantity: Joi.string().required(),
  value: Joi.string().required(),
  category: Joi.string().required()
})

export const detail = {
  params
};

export const create = {
  payload
};

export const update = {
  params,
  payload
};
