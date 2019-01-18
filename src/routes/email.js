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
    const payload = req.body.payload;
    if (payload.email) {
        await res.send(
            await controller.sendNewPassword(
                payload.email,
                payload.name,
                payload.password
            )
        );
    } else {
        await res.send(400);
    }
});

router.post('/updatedwarningstatus', async (req, res) => {
    const payload = req.body.payload;
    if (payload.email) {
        await res.send(
            await controller.updatedWarningStatus(
                payload.email,
                payload.title,
                payload.status,
                payload.comment
            )
        );
    } else {
        await res.send(400);
    }
});

router.post('/newcomment', async (req, res) => {
    const payload = req.body.payload;
    if (payload.email) {
        await res.send(
            await controller.newWarningComment(
                payload.email,
                payload.title,
                payload.name,
                payload.comment
            )
        );
    } else {
        await res.send(400);
    }
});

module.exports = router;
