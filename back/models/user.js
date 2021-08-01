const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userIdx:{
                type:Sequelize.STRING(10),
                allowNull:true
            },
            gender:{
                type:Sequelize.BOOLEAN,
                allowNull:true
            },
            nickName:{
                type:Sequelize.STRING(20),
                unique:true,
                allowNull:false,
            },
        },{
            sequelize,
            timestamps:false,
            modelName:'User',
            tableName:'users',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.User.hasMany(db.Board,{foreignKey:'nickName',sourceKey:'nickName'})
    }

}