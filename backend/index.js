const express= require('express');
const routerApi = require('./routes');
const app =express();
const port = 3000;

app.get('/',(req,res) =>{
  res.send('Hola mi serve en express');
});
app.get('/nueva',(req,res) =>{
  res.send('Hola me borraste pendejis en express');
});


app.listen(port, ()=>{
  console.log(`Escuchando en el puerto ${port}`);
});


routerApi(app);

