const router = require('express').Router();
const Rede = require('../models/rede');

router.get('/', async(req, res)=> {
    try{
        const redes = await Rede.find({})
        res.json(redes)
    }catch(error){
        res.json({error: true, message: error.message})
    }
});

router.get('/:rede', async(req, res)=> {
    try{
        const nome = req.params.rede
        const [rede] = await Rede.find({nome})
        res.json(rede)
    }catch(error){
        res.json({error: true, message: error.message})
    }
});

router.post('/', async(req, res)=> {
    try{ 
        const rede = req.body
        const containRede = await Rede.find({rede: rede.rede})
        if(containRede.length > 0){
            const update = await Rede.findOneAndUpdate({rede: rede.rede}, rede)
            res.json(update)
        }else{
            const newRede = await Rede(rede).save()
            res.json(newRede)
        } 
    }catch(error){
        res.json({error: true, message: error.message})
    }
})

router.delete('/:id', async(req, res)=> {
    try{
        const id = req.params.id
        const deletedRede = await Rede.findByIdAndDelete(id)
        res.json({deletedRede})
    }catch(error){
        res.json({error: true, message: error.message})
    }
})

module.exports = router