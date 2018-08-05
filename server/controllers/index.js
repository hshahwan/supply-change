const express = require('express');
const search = require('./search');

const getCompanyInfo = require('./get_company_info');
const login = require('./login');

const router = express.Router();

router.get('/companyinfo/:companyNumber', getCompanyInfo);
router.post('/login', login);
router.post('/search', auth, search);

module.exports = router;
