const {Board} = require('../../models')

let view_reply = async (req,res) =>{
    // 이부분은 특정 글귀를 본 페이지
    // 해당 페이지에서 좋아요를 누르거나 댓글 작성시!
    
    res.send('view')
}

let write = async(req,res) =>{
    await Board.create({title:'tt',nickName:'al',watch:1,report:0,content:'d',category:'글귀',})
    //postman 아직 익히지 못해서 대신에 db확인용으로 넣은 부분
    res.send('write')
}

let list = async (req,res) =>{
    let {url} = req.query;
    let list
    //console.log(url,'======================================')
    switch (url){
        case undefined :
            list = await Board.findAll({where:{watch:1,category:'글귀'},attributes:[title,like]})
            // return res.render('처음list페이지',{list})
            // list페이지 들어오면 가장 먼저 개인 글귀 리스트를 보여줌
            // 나중에 writer_name 일치하는 경우로 특정 사용자 각각의 리스트를 보여줄 수 있도록 하기=======================나중에 팀원과 논의============
            return res.send(list)
        case '공개' :
            list = await Board.findAll({where:{watch:0,category:'글귀'},attributes:[title,like]})
            // 공개 항목 선택시 보여주는 공개된 글귀 리스트
        case '고민' :
            list = await Board.findAll({where:{category:'고민'},attributes:[title,like]})
            // 위의 개인/공개/고민 항목 중 고민 선택시 보여주는 리스트
            return res.send(list)
        default :            
            console.log(url,'===============================')
            list = await Board.findAll({where:{id:url}})
            // return res.render('리스트가 선택된 특정 글귀의 페이지',{list})
            return res.send(list)
    }   
}
let modify = (req,res) =>{
    res.send('modify')
}

let Delete = (req,res) =>{
    res.send('delete')
}

let write_succece = async (req,res) =>{
    //let {title,writer_name,report,content,category} = req.body
    await Board.create({title:'tt',writer_name:'al',report:0,content:'d',category:'글귀',})
    res.send('write_succece')
}
let modify_succece=(req,res)=>{
    res.send('modify_succece')
}

module.exports={
    view_reply,
    write,
    list,
    modify,
    Delete,
    write_succece,
    modify_succece
}