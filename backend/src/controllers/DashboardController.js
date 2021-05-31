const Spot = require("../models/Spot");

module.exports= {
    //listar sports que o user cadastrou, por isso é show, o index
    // listaria os dashboards
    async show(req,res){
        const {user_id} = req.headers;
        const spots = await Spot.find({user: user_id});

        return res.json(spots);
    }
}