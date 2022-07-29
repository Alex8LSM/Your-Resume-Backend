const { Contact } = require('../models/resume');

// const getTemplate = async (userId, query) => {
//   const { page, limit, favorite } = query;
//   const skipped = (page - 1) * limit;
//   const skip = skipped < 0 ? 0 : skipped;
//   let findQuery = { owner: userId };

//   if (favorite !== undefined) {
//     findQuery = { owner: userId, favorite: favorite };
//   }
//   console.log('favorite', favorite);
//   console.log('findQuery', findQuery);
//   return Contact.find(findQuery, {}, { skip, limit: +limit }).populate(
//     'owner',
//     'email'
//   );
// };

const getResumeById = async (resumeId) => {
  return Contact.findById(resumeId);
};

const addResume = async (contact, id) => {
  return Contact.create({ ...contact, owner: id });
};

const editResume = async (resumeId, contact) => {
  return Contact.findByIdAndUpdate(resumeId, contact, { new: true });
};

// const updateStatusContact = async (resumeId, body) => {
//   const { favorite } = body;
//   return Contact.findByIdAndUpdate(resumeId, { favorite }, { new: true });
// };

const deleteResume = async (resumeId) => {
  return Contact.findByIdAndDelete(resumeId);
};

module.exports = {
  // getTemplate,
  getResumeById,
  addResume,
  editResume,
  // updateStatusContact,
  deleteResume,
};
