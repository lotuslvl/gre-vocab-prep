module.exports = function(sequelize, DataTypes) {
    var TextCompletionQ = sequelize.define("TextCompletionQ", {

      difficulty: DataTypes.INTEGER,

      question: DataTypes.TEXT,
      correctanswer1: DataTypes.STRING,
      wronganswerA1: DataTypes.STRING,
      wronganswerB1: DataTypes.STRING,
      wronganswerC1: DataTypes.STRING,
      wronganswerD1: DataTypes.STRING,

      correctanswer2: DataTypes.STRING,
      wronganswerA2: DataTypes.STRING,
      wronganswerB2: DataTypes.STRING,


      correctanswer3: DataTypes.STRING,
      wronganswerA3: DataTypes.STRING,
      wronganswerB3: DataTypes.STRING,
  
    });
    return TextCompletionQ;
  };
  