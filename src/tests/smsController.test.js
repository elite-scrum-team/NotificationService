require('dotenv').config();

const chai = require('chai');
chai.use(require('sinon-chai'));
let expect = chai.expect;

const controller = require('../controllers/smsController');

let res;

describe('smsController test', () => {
    context('Testing updatedWarningStatus', async () => {
        before(async () => {
            res = await controller.updatedWarningStatus(
                '+4792406455',
                'Hull i veien ved Tronheim Torg',
                'Work in progress',
                'Det kommer til å bli enda større før det blir mindre'
            );
        });

        it('', () => {
            expect(res).to.eql(200);
        });
    });
});
