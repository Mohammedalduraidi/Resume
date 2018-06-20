const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express()

// View Engine
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'MyResume'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile)

app.use(express.static(path.join(__dirname , 'MyResume')));

app.get('/', (req, res)=>{
  res.send('alo')
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('app listening on port ya alo! ', port))