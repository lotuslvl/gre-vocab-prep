module.exports = function(sequelize, DataTypes) {
    var SentenceEquivalenceQ = sequelize.define("SentenceEquivalenceQ", {
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
    return SentenceEquivalenceQ ;
  };
  