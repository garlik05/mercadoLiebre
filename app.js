const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res)=> {
    res.sendFile(path.resolve(__dirname,'views','index.html'))
});
app.get('/register.html', (req,res)=> {
    res.sendFile(path.resolve(__dirname,'views','register.html'))
});


app.listen(port,()=> console.log(`Server run on port http://Localhost:${port}`));
