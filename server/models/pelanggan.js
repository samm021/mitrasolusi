'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelanggan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pelanggan.hasMany(models.Penjualan)
    }
  };
  Pelanggan.init({
    nama: DataTypes.STRING,
    domisili: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pelanggan',
  });
  return Pelanggan;
};