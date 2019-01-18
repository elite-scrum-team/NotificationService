const util = require('util');
const fs = require('fs');

const asyncWrite = util.promisify(fs.writeFile);

const convertHTMLToPDF = require('pdf-puppeteer');

module.exports = {
    async send(url, res) {
        try {
            convertHTMLToPDF('<h1>yolo</h1>', async pdf => {
                await asyncWrite(__dirname + '/sad.pdf', pdf, 'utf-8');
                console.log(pdf);
                await res.send('hello');
            }).catch(err => console.error);
        } catch (err) {
            console.error(err);
        }
    },
};
