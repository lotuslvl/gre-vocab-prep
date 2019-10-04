module.exports = function(sequelize, DataTypes) {
    var ReadingComprehensionQ = sequelize.define("ReadingComprehensionQ", {

      difficulty: DataTypes.INTEGER,

      passage: DataTypes.TEXT,
      question1: DataTypes.STRING,
      correctanswer: DataTypes.STRING,
      wronganswerA1: DataTypes.STRING,
      wronganswerB1: DataTypes.STRING,
      wronganswerC1: DataTypes.STRING,
      wronganswerD1: DataTypes.STRING,
      wronganswerE1: DataTypes.STRING,


    });
    return ReadingComprehensionQ;
  };
  