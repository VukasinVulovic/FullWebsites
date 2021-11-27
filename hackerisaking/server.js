console.clear();

const fs = require('fs');
const express = require('express');
const compression = require('compression')
const app = express();
const http = require('http');
const https = require('https');

app.use(compression());

app.use('/', express.static('./public/main'));
app.use('/covid19test', express.static('./public/covid19test'));
app.use('/test-results', express.static('./public/test-results'));
app.use('/faq', express.static('./public/faq'));
app.use('/apps', express.static('./public/apps'));
app.use('/disagree', express.static('./public/disagree'))
app.use('/pay', express.static('./public/pay'));
app.use('/store', express.static('./public/store'));
app.use('/social', express.static('./public/social'));
app.use('/infopage', express.static('./public/infopage'));
app.use('/gtag', express.static('./gtag'));

http.createServer((req, res) => {
    res.writeHead(301, {
        Location: `https://${req.headers.host}${req.url}`
    });
    res.end();
}).listen(80, () => console.log('HTTP is listening.'));

https.createServer({
    key: fs.readFileSync('./.security/private.key'),
    cert: fs.readFileSync('./.security/certificate.crt'),
    ca: fs.readFileSync('./.security/ca_bundle.crt')
}, app).listen(443, () => console.log('HTTPS is listening.'));