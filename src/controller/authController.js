const Psychiatrist = require ('../models/Psychiatrist');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../middlewares/secret');

const authController = {
    async login(req, res){
        const { email, password } = req.body;

        const user = await Psychiatrist.findOne({
            where:{
                email,
            }
        })
        
        if(!user){
            res.status(401).json("Invalid password or e-mail address!")
        }
        else if(!bcrypt.compareSync(password, user.password)){
            res.status(401).json("Invalid password or e-mail address!")
        }
        else{
            const token = jwt.sign(
            {
                id: user.id,
                name: user.name,
                email: user.email
            },
                secret.key, {
                    expiresIn: 60*60*24
                }
            );
            console.log(user.id, user.name, token); 
            return res.status(200).json(token)
            
        }
    }
}

module.exports = authController;
