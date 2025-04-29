import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../database/database';

interface UserAttrs {
  id: number;
  name: string;
  email: string;
  password : string
}

interface UserCreationAttrs extends Optional<UserAttrs, 'id'> {}

export class User
  extends Model<UserAttrs, UserCreationAttrs>
  implements UserAttrs
{
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
}

  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      }
    },
    {
      tableName: 'users',
      sequelize,
      timestamps: true,
    }
  );


export default User;
