const { response, request} = require('express');


const usuarioGet = (req = request, res) =>  {
    
    const { q, nombre = 'No name', apikey } = req.query;
  
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
  };

  const usuarioPut = (req, res) =>  {

    const id = req.params.id;
    res.json({
        msg: 'put API - controlador',
        id
    });
  };

  const usuarioPost = (req, res) =>  {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre, 
        edad
    });
  };

  const usuarioDelete = (req, res) =>  {
    res.json({
        msg: 'delete API - controlador'
    });
  };



  module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete
  }