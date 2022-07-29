const { userDataService } = require('../services');
const { resume } = require('../models/resume');
const { createError } = require('../helpers/errors');

// const getResumeTemplate = async (req, res, next) => {
//   try {
//     const all = await userDataService.getTemplate(req.user._id, req.query);
//     res.json(all);
//   } catch (e) {
//     next(e);
//   }
// };

const getResumeById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await userDataService.getResumeById(contactId);
    if (!contact) {
      throw createError(404, 'Not found');
    } else {
      res.json(contact);
    }
  } catch (e) {
    next(e);
  }
};

const addResume = async (req, res, next) => {
  try {
    const body = req.body;
    const id = req.user._id;
    if (body.favorite === undefined) body.favorite = false;
    if (!body.name) {
      throw createError(400, `missing required name field`);
    } else if (!body.email) {
      throw createError(400, `missing required email field`);
    } else if (!body.phone) {
      throw createError(400, `missing required phone field`);
    } else {
      const { error } = resume.validate(body);
      if (error) {
        console.log(error);
        throw createError(400, error.message);
      }
      const contact = await userDataService.addResume(body, id);
      res.status(201).json(contact);
    }
  } catch (e) {
    next(e);
  }
};

const editResume = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const body = req.body;
    const contact = await userDataService.updateContact(contactId, body);
    if (Object.keys(body).length === 0) {
      throw createError(400, 'missing fields');
    } else if (!contact) {
      throw createError(404, 'Not found');
    } else {
      const { error } = resume.validate(body);
      if (error) {
        throw createError(400, error.message);
      }
      res.status(200).json(contact);
    }
  } catch (e) {
    next(e);
  }
};

const editResumeFavorite = async (req, res, next) => {
  try {
    const body = req.body;
    if (body.favorite === undefined) {
      throw createError(400, 'missing field favorite');
    } else {
      const { contactId } = req.params;
      const contact = await userDataService.updateStatusContact(contactId, body);
      if (!contact) {
        throw createError(404, 'Not found');
      } else {
        res.status(200).json(contact);
      }
    }
  } catch (e) {
    next(e);
  }
};
const deleteResume = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await userDataService.removeContact(contactId);
    if (!contact) {
      throw createError(404, 'Not found');
    } else {
      res.status(200).json({ message: 'contact deleted' });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  // getResumeTemplate,
  getResumeById,
  addResume,
  editResume,
  deleteResume,
};
