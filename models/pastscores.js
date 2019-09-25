module.exports = function(sequelize, DataTypes) {
    var PastScore = sequelize.define("PastScore", {
      //fill out rest of definition later
      score: DataTypes.INTEGER,
      numright: DataTypes.INTEGER,
      numwrong: DataTypes.INTEGER,
      datetaken:DataTypes.DATEONLY,
      
    });

    PastScore.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        PastScore.belongsTo(models.Player, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return PastScore;
  };
  