'use strict';

var Sequelize=require('sequelize');

exports.sequelize = function () {
	return new Sequelize('modelTest', 'root', 'root', {host: 'localhost', port:3306, logging:console.log});
}
