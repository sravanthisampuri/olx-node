module.exports = {
    port : 3001,
    jwt : {
        secret:"hkjjkrh!23",
        options: {expiresIn: 365 * 60 * 60 * 24 }
    },
    db : {
        mongo:{
<<<<<<< HEAD
            uri:"mongodb://localhost:27017/learningnode",
=======
            uri:"mongodb://localhost:27017/olxNode",
>>>>>>> 59063d25b2181a1a5aa13a26d459220b9c7a2e56
            options : {
                user :'',
                pass : ''
            }
        }
       
    },
    baseUrl:'http://localhost:'+3001,
}