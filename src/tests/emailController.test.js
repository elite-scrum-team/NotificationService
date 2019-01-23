require('dotenv').config();
const controller = require('../controllers/emailController');

describe('emailController test', () => {
    test('Testing sendRegistrationEmail', async () => {
        const res = await controller.sendRegistrationEmail(
            'nikolai.holt@gmail.com',
            'FSRKGFgrgjo48'
        );
        expect(res).toBe(202);
    });

    test('Testing sendNewPassword', async () => {
        const res = await controller.sendNewPassword(
            'nikolai.holt@gmail.com',
            'GRoih8iyg98U'
        );
        expect(res).toBe(202);
    });

    test('Testing updatedWarningStatus', async () => {
        const res = await controller.updatedWarningStatus(
            'nikolai.holt@gmail.com',
            'Hull i veien ved Tronheim Torg',
            'Work in progress',
            'Det kommer til å bli enda større før det blir mindre'
        );
        expect(res).toBe(202);
    });

    test('Testing newWarningComment', async () => {
        const res = await controller.newWarningComment(
            'nikolai.holt@gmail.com',
            'Hull i veien ved Trondheim Torg',
            'De må jo snart bli ferdige, dette tar jo altfor lang tid'
        );
        expect(res).toBe(202);
    });

    test('Testing newContract', async () => {
        const res = await controller.newContract(
            'nikolai.holt@gmail.com',
            'Hull i veien',
            'SuperGoodBuilders',
            'Om dere kunne fikset dette fort hadde det vært fint'
        );
        expect(res).toBe(202);
    });
});
