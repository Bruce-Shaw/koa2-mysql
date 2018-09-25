const sql = require('../config/default');
const moment = require('moment');
const tableName = 'users';

module.exports.getTotalCount = async () => {
  const sqlStr = `SELECT COUNT(1) FROM ${tableName};`;
  const result = await sql.query(sqlStr)
    .then(function (data) {
      return data;
    }, function (error) {
      return error;
    });
  return result[0]['COUNT(1)'];
}

module.exports.getUsersByPage = async ({
  pageNow,
  pageSize
}) => {
  const start = (pageNow - 1) * pageSize;
  const end = pageSize;
  const sqlStr = `SELECT * FROM ${tableName} limit ${start}, ${end};`;
  const result = await sql.query(sqlStr)
    .then(function (data) {
      if (data.length) {
        data.map(item => {
          item.bornStr = moment(item.born).format('YYYY-MM-DD');
        });
      }
      return data;
    }, function (error) {
      return error;
    });
  return result;
}

module.exports.getUserById = async ({
  id
}) => {
  const sqlStr = `SELECT * FROM ${tableName} WHERE id=?;`;
  const [result] = await sql.query(sqlStr, [id])
    .then(function (data) {
      return data;
    }, function (error) {
      return error;
    });
  result.bornStr = moment(result.born).format('YYYY-MM-DD');
  return result;
}

module.exports.createUser = async ({
  name,
  gender,
  born,
  position,
  salary
}) => {
  const date = moment(born).format('YYYY-MM-DD');
  const sqlStr = `INSERT INTO ${tableName} (name,gender,born,position,salary) VALUES (${name},${gender},'${date}',${position},${salary});`;
  const result = await sql.query(sqlStr)
    .then(function (data) {
      return data;
    }, function (error) {
      return error;
    });
  return result;
}

module.exports.deleteUserById = async ({
  id
}) => {
  const sqlStr = `DELETE FROM ${tableName} WHERE id=${id};`;
  const {
    protocol41
  } = await sql.query(sqlStr)
    .then(function (data) {
      return data;
    }, function (error) {
      return error;
    });
  return protocol41;
}

module.exports.searchUsers = async ({
  value
}) => {
  const sqlStr = `SELECT * FROM ${tableName} WHERE name LIKE '%${value}%' OR position LIKE '%${value}%'`;
  const result = await sql.query(sqlStr)
    .then(function (data) {
      if (data.length) {
        data.map(item => {
          item.bornStr = moment(item.born).format('YYYY-MM-DD');
        });
      }
      return data;
    }, function (error) {
      return error;
    });
  return result;
}

module.exports.updateUser = async ({
  id,
  name,
  gender,
  born,
  position,
  salary
}) => {
  const date = moment(born).format('YYYY-MM-DD');
  console.log(name, gender, date, position, salary, id)
  const sqlStr = `UPDATE users SET name=?,gender=?,born=?,position=?,salary=? WHERE id=?;`;
  const {
    protocol41
  } = await sql.query(sqlStr, [name, gender, date, position, salary, id])
    .then(function (data) {
      return data;
    }, function (error) {
      return error;
    });
  return protocol41;
}