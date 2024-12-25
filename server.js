const express = require('express');
const request = require('request');
const app = express();

app.get('/embed', (req, res) => {
    const targetUrl = 'https://www.keypano.com/v/4l2764dd2vc4b3-1735052461.html';
    request({ url: targetUrl, headers: { 'User-Agent': 'Mozilla/5.0' } }, (error, response, body) => {
        if (error) {
            res.status(500).send('Error mengakses URL target');
            return;
        }
        res.setHeader('Content-Type', 'text/html'); // Tetapkan tipe konten
        res.send(body.replace(/X-Frame-Options:\s*DENY/gi, '')); // Menghapus header yang bermasalah
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
