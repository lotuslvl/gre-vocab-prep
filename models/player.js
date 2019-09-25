module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
      //fill out rest of definition later
      loginusername: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      progress: DataTypes.ARRAY(DataTypes.INTEGER),
      gre_test_date: DataTypes.DATEONLY,
    
    });

    Player.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Player.hasMany(models.PastScore, {
          onDelete: "cascade"
        });
      };
    return Player;
  };
  