module.exports = function(sequelize, DataTypes) {
    var TextCompletionQ = sequelize.define("TextCompletionQ", {
      //fill out definition later
      difficulty: DataTypes.INTEGER,
      passage: DataTypes.TEXT,

      question: DataTypes.STRING,
      correctanswer: DataTypes.STRING,
      wronganswerA: DataTypes.STRING,
      wronganswerB: DataTypes.STRING,
      wronganswerC: DataTypes.STRING,
      wronganswerD: DataTypes.STRING,
    });
    return TextCompletionQ;
  };
  