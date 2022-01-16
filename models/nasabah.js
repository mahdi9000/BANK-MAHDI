'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nasabah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nasabah.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args: true,
          msg: "Name is required"
        },
        notNull:{
          args: true,
          msg: "Name is required"
        }
      }},
    address:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args: true,
          msg: "Address is required"
        },
        notNull:{
          args: true,
          msg: "Address is required"
        }
      }},
    birthPlace:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args: true,
          msg: "Birth Place is required"
        },
        notNull:{
          args: true,
          msg: "Birth Place is required"
        }
      }},
    birthDate: {
      type: DataTypes.DATE,
      allowNull:false,
      validate:{
        notEmpty:{
          args: true,
          msg: "Birth Date is required"
        },
        notNull:{
          args: true,
          msg: "Birth Date is required"
        }
      }},
    ktp: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args: true,
          msg: "KTP is required"
        },
        notNull:{
          args: true,
          msg: "KTP is required"
        }
      }},
    phone: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args: true,
          msg: "Phone Number is required"
        },
        notNull:{
          args: true,
          msg: "Phone Number is required"
        }
      }},
  }, {
    sequelize,
    modelName: 'Nasabah',
  });
  return Nasabah;
};