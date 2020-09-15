const router = require('express').Router();

const importer_controller = require('../controllers/importer')
const upload_controller = require('../controllers/upload')

router.get('/readExcel', importer_controller.readExcel)

//router.post('/profile', upload_controller.profile)
module.exports = router;
