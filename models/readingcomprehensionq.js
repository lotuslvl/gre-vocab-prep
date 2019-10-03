module.exports = function(sequelize, DataTypes) {
    var ReadingComprehensionQ = sequelize.define("TextCompletionQ", {

      difficulty: DataTypes.INTEGER,

      passage: DataTypes.TEXT,
      question1: DataTypes.STRING,
      correctanswer1: DataTypes.STRING,
      wronganswerA1: DataTypes.STRING,
      wronganswerB1: DataTypes.STRING,
      wronganswerC1: DataTypes.STRING,
      wronganswerD1: DataTypes.STRING,

      question2: DataTypes.TEXT,
      correctanswer2: DataTypes.STRING,
      wronganswerA2: DataTypes.STRING,
      wronganswerB2: DataTypes.STRING,
      wronganswerC2: DataTypes.STRING,
      wronganswerD2: DataTypes.STRING,

      question3: DataTypes.TEXT,
      correctanswer3: DataTypes.STRING,
      wronganswerA3: DataTypes.STRING,
      wronganswerB3: DataTypes.STRING,
      wronganswerC3: DataTypes.STRING,
      wronganswerD3: DataTypes.STRING,  
    });
    return ReadingComprehensionQ;
  };
  