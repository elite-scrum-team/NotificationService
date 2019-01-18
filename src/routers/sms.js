const router = require('express').Router();
const controller = require('../controllers/smsController');

router.post('/updatedwarningstatus', async (req, res) => {
    const payload = req.body.payload;
    if (payload.telephone) {
        await res.send(
            await controller.updatedWarningStatus(
                payload.telephone,
                payload.title,
                payload.status,
                payload.comment
            )
        );
    } else {
        await res.send(400);
    }
});

module.exports = router;
