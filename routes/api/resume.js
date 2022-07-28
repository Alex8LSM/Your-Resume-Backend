const express = require('express');
const { validateId, auth } = require('../../middlewares');
const {
  getResumeTemplate,
  getResumeById,
  addResume,
  editResume,
  // editContactFavorite,
  deleteResume,
} = require('../../controllers/resume');
const router = express.Router();

router.get('/', getResumeTemplate);
router.get('/:userId', auth, validateId, getResumeById);
router.post('/', auth, addResume);
router.put('/:userId', auth, validateId, editResume);
// router.patch('/:userId/favorite', auth, validateId, editContactFavorite);
router.delete('/:userId', auth, validateId, deleteResume);

module.exports = router;
