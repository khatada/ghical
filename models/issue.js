'use strict';
module.exports = function(sequelize, DataTypes) {
  var issue = sequelize.define('issue', {
    org: DataTypes.STRING,
    repo: DataTypes.STRING,
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    updatedOnGithub: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return issue;
};