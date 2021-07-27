const {Board,User,Comment,Weather} = require('../../models')
let login = async (req,res) =>{
    let ress = await Weather.create({emo:'emo',text:'text'})
    let resss = await Weather.findOne({
        where:{
            id:1
        }
    })
    
    
    res.send('login 입니다')
}


module.exports={
    login
}