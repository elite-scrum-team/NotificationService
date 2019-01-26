const router = require('express').Router();
const controller = require('../controllers/emailController');

/**
 * Email routers
 * @module routers/email
 * @requires express
 * @requires controller
 */

/**
 * Express route for email
 * @namespace emailRouter
 */

/**
 * Router for when someone has registered a new user
 * @function
 * @name POST-RegisterUserEmail
 * @param {string} path - "/register"
 * @param {callback} route - The route
 */
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

/**
 * Router for when someone has lost their password
 * @function
 * @name POST-NewPassword
 * @param {string} path - "/newpassword"
 * @param {callback} route - The route
 */
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

/**
 * Router for when a warning status has been updated
 * @function
 * @name POST-UpdatedWarningStatus
 * @param {string} path - "/updatedwarningstatus"
 * @param {callback} route - The route
 */
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

/**
 * Router for when someone has commented on a warning
 * @function
 * @name POST-NewComment
 * @param {string} path - "/newcomment"
 * @param {callback} route - The route
 */
router.post('/newcomment', async (req, res) => {
    if (req.body.emails) {
        await res.send(
            await controller.newWarningComment(
                req.body.emails,
                req.body.title,
                req.body.comment
            )
        );
    } else {
        await res.send(400);
    }
});

/**
 * Router for when someone has recieved a new contract
 * @function
 * @name POST-NewContract
 * @param {string} path - "/newcontract"
 * @param {callback} route - The route
 */
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
