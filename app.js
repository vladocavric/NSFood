const express = require('express');
const app = express();
//===================================================================================
app.set('view engine', 'ejs');
app.use(express.static('themes'));
//===================================================================================
app.get('/', function (req, res) {
    res.send('something about home page')
});

//===================================================================================
app.listen(process.env.PORT, err => {
    if(err){
        console.log(err)
    } else {
        console.log('this is working')
    }
});