const express = require('express');
const router = express.Router();
const monstersCtrl = require('../../controllers/monsters');

router.get('/', /*checkAuth,*/ monstersCtrl.index);



router.use(require('../../config/auth'));
router.post('/', /*checkAuth,*/ monstersCtrl.create);
router.get('/:id', monstersCtrl.show);

router.put('/:id', monstersCtrl.update);

router.delete('/:id', monstersCtrl.delete);



/*function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}*/

module.exports = router;
