import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'posts', 'postgres', 'postgres', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    ssl: false,
    dialectOptions: {clientMinMessages: 'notice'},
});

sequelize.authenticate().then(() => { 
    console.log('Connection has been established successfully.');
    sequelize.sync().then(() => {
        console.log('Database synced');
    }).catch(() => { });
}).catch(() => { 
    console.error('Unable to connect to the database:');
});

export default sequelize;