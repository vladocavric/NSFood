const express = require('express');
const app = express();
const mongoose = require('mongoose');
//===================================================================================
mongoose.connect(process.env.NSFOODDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    console.log('connected to DB');
}).catch(err => {
    console.log(err);
});
//===================================================================================
app.set('view engine', 'ejs');
app.use(express.static('themes'));
//===================================================================================

//===================================================================================
app.get('/', async (req, res) => {
    res.render('home');
});

app.get('*', function (req, res) {
    res.send('404');
});

//===================================================================================
app.listen(process.env.PORT, err => {
    if(err){
        console.log(err)
    } else {
        console.log('this is working')
    }
});
