const express = require("express");
const controller = require('./controller/controller');

const options = {
    "caseSensitive": false, "strict": false
};

const router = express.Router();
router.get('/login', controller.login);
router.post('/authenticate', controller.authenticate);
router.get('/formview', controller.formview);
router.post('/postUser', controller.postUser);

module.exports = router;