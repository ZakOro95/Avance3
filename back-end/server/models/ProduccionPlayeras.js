module.exports=(sequelize, DataTypes)=>{
    const ProduccionPlayeras=sequelize.define('ProduccionPlayeras',{
        ID:{
            primaryKey:true,
            type:DataTypes.INTEGER
        },
        Empleado:DataTypes.STRING,
        Llegada:DataTypes.TIME,
        Salida:DataTypes.TIME,
        Playeras:DataTypes.INTEGER,
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    })
    return ProduccionPlayeras
}