const router = require('express').Router();
const controller = require('../controllers/emailController');


router.post('/register', async (req, res) => {
  const payload = req.body.payload;
  if (payload.email) {
    await res.send(
      await controller.sendRegistrationEmail(payload.email, payload.name, payload.password)
    )
  } else {
    await res.send({})
  }
});

router.post('/newpassword', async (req, res) => {
  const payload = req.body.payload;
  if (payload.email) {
    await res.send(
      await controller.sendNewPassword(payload.email, payload.name, payload.password)
    )
  } else {
    await res.send({})
  }
});

export default router;