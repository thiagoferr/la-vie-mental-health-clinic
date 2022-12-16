const jwt = require('jsonwebtoken');
const secret = require('../middlewares/secret');

// const verifiedToken = {

// decodeToken: function(req, res, next) {
//     const bearerToken = req.headers.authorization;
//     const id = Number(req.params.id)
    
//     if(!bearerToken)
//         return res.status(401).send({ error: 'No token provided!'});
    
//     const parts = bearerToken.split(' ');

//     if(!(parts.length === 2))
//         return res.status(401).send({ error: 'Token invalid!'});

//     const [ bearer, token ] = parts

//     if(!/^Bearer$/.test(bearer))
//         return res.status(401).send({ error: 'Is not a bearer token'});
    
//     jwt.verify(token, secret.key, (err, decoded) => {
//     if (err) 
//         return res.status(401).send({ error: 'This token expired or was not valid'});
    
//     if(!decoded.id)
//         return res.status(401).send({ error: 'No id available'});
        
//     if(decoded.id !== id)
//         return res.status(401).send({ error: 'This Token has not belong to the specified ID'})
    
//     })
//     return next()
//     }
// }
const verifiedToken = {

    decodeToken: function(req, res, next) {
        const bearerToken = req.headers.authorization;
        const id = Number(req.params.id)
        
        if(!bearerToken)
            return res.status(401).send({ error: 'No token provided!'});
        
        const parts = bearerToken.split(' ');
    
        if(!(parts.length === 2))
            return res.status(401).send({ error: 'Token invalid!'});
    
        const [ bearer, token ] = parts
    
        if(!/^Bearer$/.test(bearer))
            return res.status(401).send({ error: 'Is not a bearer token'});
        
        jwt.verify(token, secret.key, (err, decoded) => {
        if (err) 
            return res.status(401).send({ error: 'This token expired or was not valid'});
        
        if(!decoded.id)
            return res.status(401).send({ error: 'No id available'});
            
        if(decoded.id !== id)
            return res.status(401).send({ error: 'This Token has not belong to the specified ID'})
        
        })
        return next()
        }
    }
module.exports = verifiedToken;