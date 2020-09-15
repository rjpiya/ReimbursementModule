const router = require('express').Router();

const upload_controller = require('../controllers/upload')

router.post('/uploadImage', upload_controller.uploadImage)



module.exports = router;
