const {User} = require('../../models')
// 로컬로그인 대신에 구글이랑 카카오 로그인 하기로 했는데 여기에 그러면 우리가 받는 건 오직 nickname?==============================
// 고민유형 받는 건?==========================================

let login =(req,res) =>{
    res.send('login 입니다')
}

let join = async(req,res) =>{
    await User.create()
    res.send('join')
}

let info = async (req,res)=>{
    // let {idx} = 
    // let res = await User.findAll({where:{id:idx}})
    res.send('info')
}
 
let info_modify = (req,res) =>{
    res.send('info_modify')
}

module.exports={
    login,
    join,
    info,
    info_modify,
}