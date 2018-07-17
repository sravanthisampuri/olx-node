module.exports = {
    port : 3001,
    jwt : {
        secret:"hkjjkrh!23",
        ooptions: {expiresIn: 365 * 60 * 60 * 24 }

    },
    db : {
        mongo:{
            uri:" mongodb://localhost:27017/learningnode",
            options : {
                user :'',
                pass : ''
            }
        }
       
    },
    baseUrl:'http://localhost:'+3001,
}