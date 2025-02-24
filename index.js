const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() *10) + 1 ;
    res.render('random', { angka : num});
});

app.get('/t/:tag', (req, res) => {
    const {tag} = req.params;
    res.render('tag' , { tag });
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});