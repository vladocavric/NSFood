const express = require('express');
const app = express();
const mongoose = require('mongoose');
//===================================================================================
mongoose.connect('mongodb+srv://NSFood:123456+8@nsfood-pifpl.mongodb.net/NSFood?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    console.log('connected to DB');
}).catch(err => {
    console.log(err);
});
//===================================================================================
app.set('view engine', 'ejs');
app.use(express.static('themes'));
//===================================================================================
const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const Post = mongoose.model('Post', PostSchema);
//===================================================================================
app.get('/', async (req, res) => {
    let post = await Post.create({title: 'test', description: 'test description'});
    res.render('home', {post: post});
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

//some comment