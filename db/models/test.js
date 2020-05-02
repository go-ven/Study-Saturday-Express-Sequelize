'use strict';
const Sequelize = require('sequelize');
const db = require('../db');
const Student = require('./student');

const Test = db.define('test', {
  subject: {
    type: Sequelize.STRING,
    allowNull: false       //validate
  },
  grade : {
    type : Sequelize.INTEGER,
    allowNull: false
  }
});

//associations. ways to tell dbhow model are related to each other. test belongs to exactly 1 student. so gice each test a studet id
//hasMany
//belongsToMany

Test.belongsTo(Student, { as: 'student'}) //will add student id to test - the foreign key assosiation
//as: student will passed AS "student".


module.exports = Test;
