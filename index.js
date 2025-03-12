const path = require('path');
const express = require('express');
const app = express();

const tagData = require ('./data.json');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname,'/public')));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() *10) + 1 ;
    res.render('random', { angka : num});
});

app.get('/t/:tag', (req, res) => {
    const {tag} = req.params;
    const data = tagData[tag];
    if(data) {
        res.render('tag', {data});
    } else{
        res.render('notfound', {tag});
    }
});

app.get('/cats', (req, res) => {
    const hewan = ['embil','lili','wahyu'];
    res.render('cats',{ hewan });
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});