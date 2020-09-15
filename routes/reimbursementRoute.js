const router = require('express').Router();

const reimbursement_controller = require('../controllers/reimbursement')

router.post('/addReimbursement', reimbursement_controller.addReimbursement)
router.post('/getReimbursemnet', reimbursement_controller.getReimbursemnet)
router.post('/allReimbursemnetDetail', reimbursement_controller.getAllReimbursemnetDatewise)


module.exports = router;
