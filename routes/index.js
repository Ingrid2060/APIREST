const express = require('express');
const router = express.Router();


    router.get('/',(requ, res) =>{
        res.send('estamos en raiz');
    } );
    
    router.get('/nosotros',(requ, res) =>{
        res.send('estamos en nosotrosssssssss');
    } );  

    module.exports = router;

    


