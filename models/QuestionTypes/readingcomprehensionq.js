module.exports = function(sequelize, DataTypes) {
    var ReadingComprehensionQ = sequelize.define("ReadingComprehensionQ", {
      //defines up to 4 questioNS per passage
      // we can fill any other parameters later
      difficulty: DataTypes.INTEGER,
      passage: DataTypes.TEXT,

      question1: DataTypes.STRING,
      correctanswer1: DataTypes.STRING,
      wronganswer1A: DataTypes.STRING,
      wronganswer1B: DataTypes.STRING,
      wronganswer1C: DataTypes.STRING,
      wronganswer1D: DataTypes.STRING,

      question2: DataTypes.STRING,
      correctanswer2: DataTypes.STRING,
      wronganswer2A: DataTypes.STRING,
      wronganswer2B: DataTypes.STRING,
      wronganswer2C: DataTypes.STRING,
      wronganswer2D: DataTypes.STRING,

      question3: DataTypes.STRING,
      correctanswer3: DataTypes.STRING,
      wronganswer3A: DataTypes.STRING,
      wronganswer3B: DataTypes.STRING,
      wronganswer3C: DataTypes.STRING,
      wronganswer3D: DataTypes.STRING,

      question4: DataTypes.STRING,
      correctanswer4: DataTypes.STRING,
      wronganswer4A: DataTypes.STRING,
      wronganswer4B: DataTypes.STRING,
      wronganswer4C: DataTypes.STRING,
      wronganswer4D: DataTypes.STRING,
    });
    return ReadingComprehensionQ;
  };
  