const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class BackgroundImg extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            img:{
                type:Sequelize.TEXT,
                allowNull:true
            },
            imgTitle:{
                type:Sequelize.STRING(50),
                allowNull:true
            },
            img2:{
                type:Sequelize.Text,
                allowNull:true
            },
            imgTitle2:{
                type:Sequelize.STRING(50),
                allowNull:true
            }
        },{
            sequelize,
            timestamps:false,
            modelName:'BackgroundImg',
            tableName:'BackgroundImgs',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}
