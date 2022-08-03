const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, ()=>{
    console.log('server listening ' + PORT);
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('/makeup', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'test02.html'));
})
app.get('/subpage', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'sub.html'));
})
app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
})