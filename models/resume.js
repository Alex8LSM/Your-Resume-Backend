const { Schema, model } = require('mongoose');
// const Joi = require('joi');

// const schema = Joi.object({
//   name: Joi.string().alphanum().min(3).max(30).required(),
//   email: Joi.string()
//     .email({
//       minDomainSegments: 2,
//       tlds: { allow: ['com', 'net', 'ua', 'ru'] },
//     })
//     .required(),
//   phone: Joi.string().required(),
//   favorite: Joi.bool(),
// });

const resumeSchema = new Schema({
  photo:{
    type: Object,
    image: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
  contacts:{
    type: Object,
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  techSkills:{
    type: Array,
  },
  softSkills:{
    type: Array,
  },
  aboutMe:{
    type: Object,
    name: {
      type: String,
    },
    profession: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  projects:{
    type: Array,
    link: {
      type: String,
    },
    tehnology: {
      type: String,
    },
  },
  workExperience:{
    type: Array,
    position: {
      type: String,
    },
    company: {
      type: String,
    },
    period: {
      type: String,
    },
    country: {
      type: String,
    },
    duties:{
      type: Array,
  }
  },
  education:{
    type: Array,
    university: {
      type: String,
    },
    specialty: {
      type: String,
    },
    period: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
});

const resume = model('resume', resumeSchema);

module.exports = {
  resume,
  // schema,
};
