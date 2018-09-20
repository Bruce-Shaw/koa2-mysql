const { getUsersByPage, getTotalCount, getUserById, createUser } = require("../dao/userDao.js")

module.exports.getUsersByPage = async (value) => {
  const result = {
    'totalCount': await getTotalCount(),
    'data': await getUsersByPage(value),
  }
  return result;
}

module.exports.getUserById = async (value) => {
  return await getUserById(value);
}

module.exports.createUser = async (value) => {
  const {insertId} = await createUser(value)
  const result = {
    'id': insertId,
    'result': insertId > 0,
  }
  return result;
}