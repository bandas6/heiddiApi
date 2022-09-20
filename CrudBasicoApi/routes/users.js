const { Router } = require('express');
const { getUsers, getUserId, postUsers, putUsers, deleteUsers } = require('../controllers/user');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.get('/',[
    validarCampos
],getUsers);


router.get('/:id',[
    validarCampos
],getUserId);

router.post('/',postUsers);

router.put('/:id',putUsers);

router.delete('/:id',deleteUsers);




module.exports = router;