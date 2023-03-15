const router = require('express').Router();
const Rede = require('../models/rede');

router.get('/:rede', async(req, res)=> {
    try{
        const rede = req.params.rede
        const [redes] = await Rede.find({rede})
        res.json(redes)
    }catch(error){
        res.json({error: true, message: error.message})
    }
});

router.post('/', async(req, res)=> {
    try{
        const rede = await Rede(req.body).save()
        res.json(rede)
    }catch(error){
        res.json({error: true, message: error.message})
    }
})

module.exports = router