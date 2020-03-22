const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('this is home page for NS Food app')
});
app.listen(5000, err => {
    if(err){
        console.log(err)
    } else {
        console.log('this is working')
    }
});