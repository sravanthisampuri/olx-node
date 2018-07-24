module.exports = {
    port : 3000,
    jwt : {
        secret:"hkjjkrh!23",
        options: {expiresIn: 365 * 60 * 60 * 24 }
    },
    db : {
        mongo:{
            uri:"mongodb://localhost:27017/olxNode",
            options : {
                user :'',
                pass : ''
            }
        }
       
    },
    baseUrl:'http://localhost:'+3000,
}