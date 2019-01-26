require('dotenv').config();

const chai = require('chai');
chai.use(require('sinon-chai'));
let expect = chai.expect;

const controller = require('../controllers/emailController');

let res;

describe('emailController test', () => {
    context('Testing sendRegistrationEmail', async () => {
        before(async () => {
            res = await controller.sendRegistrationEmail(
                'nikolai.holt@gmail.com',
                'FSRKGFgrgjo48'
            );
        });

        it('', () => {
            expect(res).to.eql(202);
        });
    });

    context('Testing sendNewPassword', async () => {
        before(async () => {
            res = await controller.sendNewPassword(
                'nikolai.holt@gmail.com',
                'GRoih8iyg98U'
            );
        });

        it('', () => {
            expect(res).to.eql(202);
        });
    });

    context('Testing updatedWarningStatus', async () => {
        before(async () => {
            res = await controller.updatedWarningStatus(
                'nikolai.holt@gmail.com',
                'Hull i veien ved Tronheim Torg',
                'Work in progress',
                'Det kommer til å bli enda større før det blir mindre'
            );
        });

        it('', () => {
            expect(res).to.eql(202);
        });
    });

    context('Testing newWarningComment', async () => {
        before(async () => {
            res = await controller.newWarningComment(
                'nikolai.holt@gmail.com',
                'Hull i veien ved Trondheim Torg',
                'De må jo snart bli ferdige, dette tar jo altfor lang tid'
            );
        });

        it('', () => {
            expect(res).to.eql(202);
        });
    });

    context('Testing newContract', async () => {
        before(async () => {
            res = await controller.newContract(
                'nikolai.holt@gmail.com',
                'Hull i veien',
                'SuperGoodBuilders',
                'Om dere kunne fikset dette fort hadde det vært fint'
            );
        });

        it('', () => {
            expect(res).to.eql(202);
        });
    });
});
