const { Sequelize, Model, DataTypes } = require("sequelize");
//const sequelize = new Sequelize('sqlite::memory:');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
});

const user = sequelize.define('users', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING
})

const createTable = async () => {
    await user.sync();
}


const createa = async() => {
    const jane = await user.create({ name: "Chiron" });
    console.log(jane);
}

createTable();
createa();


