const mongoose = require('mongoose');
const URI = "mongodb+srv://mvvuser:ZPQmNFLRFw51qL59@clustermvv.ty0w2ia.mongodb.net/mvv"

mongoose.connect(URI).then(()=> {console.log('Conectador com sucesso a base de dados')}).catch( error => console.log(error))