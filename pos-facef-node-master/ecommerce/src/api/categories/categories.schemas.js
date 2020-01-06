import * as Joi from '@hapi/joi';

// const params = Joi.object({
//   postId: Joi.number().required(),
//   id: Joi.number().required()
// });
const params = Joi.object({
  id: Joi.number().required()
});

const payload = Joi.object({
  description: Joi.string().min(3).required()
});

// export const list = {
//   params: Joi.object({
//     postId: Joi.number().required()
//   })
// };

// export const detail = {
//   params
// };

// export const create = {
//   params: Joi.object({
//     postId: Joi.number().required()
//   }),
//   payload,
// };

// export const update = {
//   params,
//   payload
// };

// export const destroy = {
//   params
// };

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
