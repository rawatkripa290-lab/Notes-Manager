const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
//parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
//file dhundhna public wale path per
app.set('view engine','ejs');
app.get('/',(req,res)=>{
  fs.readdir(`./files`,(err,files)=>{
    res.render("index",{files:files});
  })
})
app.get('/file/:filename', (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, 'utf-8', (err, filedata) => {

    if (err) {
      return res.status(404).send('File not found');
    }

    res.render('show', {
      filename: req.params.filename,
      filedata: filedata
    });
  });
});
app.post('/create',(req,res)=>{
  fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
    res.redirect("/")
  })
})
// app.get('/profile/:username',(req,res)=>{
//   //enters the username that the user had entered
//   res.send(`You visted ${req.params.username} profile`) 
//   //print parameter name in the frontend
// })
// app.get('/author/:username/:age',(req,res)=>{
//   res.send(`Welcome ${req.params.username} and your age is ${req.params.age}`)
// })
app.listen(3000,(req,res)=>{
  console.log("Server starting at 3000")
})
//_dirname -> is the directory name
//public -> public is the inside folder