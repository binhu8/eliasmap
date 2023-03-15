const mongoose = require('mongoose');
const URI = "mongodb+srv://usermvv:9tI7cGDmqJxX2YQx@pdvactiondb-ebuga.mongodb.net/mvv"

mongoose.connect(URI).then(()=> {console.log('Conectador com sucesso a base de dados')}).catch( error => console.log(error))