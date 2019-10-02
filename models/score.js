module.exports = function(sequelize, DataTypes) {
    var Score = sequelize.define("Score", {
      //fill out rest of definition later
      name: DataTypes.STRING,
      email:DataTypes.STRING,
      type:DataTypes.STRING,
      score: DataTypes.INTEGER,
      percentage: DataTypes.FLOAT,
      numright: DataTypes.INTEGER,
      numwrong: DataTypes.INTEGER,
      timetaken: DataTypes.FLOAT,
      
    });


    return Score;
  };