//Sessioon é utilizado, para login, logout,listar de users logados...
/* dentro do controle temos esses metodos:
Index - retornar uma listagem (nesse caso, uma listagem de sessoes )
show - lista uma unica sessao
Store -Criar uma sessao
Update - editar
Destroy - deletar
*/
const User = require('../models/User');
module.exports={
    async store(req, res){ 
        const {email} = req.body;
        let user = await User.findOne({email});
        if(!user){
            user = await User.create({email});
        }
        return res.json(user);
    }
};