import sequelize from '../db/setup.js';
import { DataTypes, Model } from 'sequelize';

class Post extends Model {
    static {
        console.log('Post model init');
    }
}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize });

Post.sync({ force: false }).then(() => {});

export default Post;