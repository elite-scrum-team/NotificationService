require('dotenv').config();
const controller = require('../controllers/smsController');

describe('smsController test', () => {
    test('Testing updatedWarningStatus', async () => {
        const res = await controller.updatedWarningStatus(
            '+4792406455',
            'Hull i veien ved Tronheim Torg',
            'Work in progress',
            'Det kommer til å bli enda større før det blir mindre'
        );
        expect(res).toBe(200);
    });
});
