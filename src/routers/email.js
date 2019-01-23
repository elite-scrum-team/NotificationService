const router = require('express').Router();
const controller = require('../controllers/emailController');

router.post('/register', async (req, res) => {
    if (req.body.email) {
        await res.send(
            await controller.sendRegistrationEmail(
                req.body.email,
                req.body.name,
                req.body.password
            )
        );
    } else {
        await res.send(400);
    }
});

router.post('/newpassword', async (req, res) => {
    if (req.body.email) {
        await res.send(
            await controller.sendNewPassword(
                req.body.email,
                req.body.name,
                req.body.password
            )
        );
    } else {
        await res.send(400);
    }
});

router.post('/updatedwarningstatus', async (req, res) => {
    if (req.body.emails) {
        await res.send(
            await controller.updatedWarningStatus(
                req.body.emails,
                req.body.title,
                req.body.status,
                req.body.comment
            )
        );
    } else {
        await res.send(400);
    }
});

router.post('/newcomment', async (req, res) => {
    if (req.body.emails) {
        await res.send(
            await controller.newWarningComment(
                req.body.emails,
                req.body.title,
                req.body.name,
                req.body.comment
            )
        );
    } else {
        await res.send(400);
    }
});

router.post('/newcontract', async (req, res) => {
    if (req.body.email) {
        await res.send(
            await controller.newContract(
                req.body.email,
                req.body.title,
                req.body.name,
                req.body.details
            )
        );
    } else {
        await res.send(400);
    }
});

module.exports = router;
