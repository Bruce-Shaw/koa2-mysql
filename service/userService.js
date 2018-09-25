const {
  getUsersByPage,
  getTotalCount,
  getUserById,
  createUser,
  deleteUserById,
  searchUsers,
  updateUser
} = require("../dao/userDao.js")

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
  const {
    insertId
  } = await createUser(value)
  const result = {
    'id': insertId,
    'result': insertId > 0,
  }
  return result;
}

module.exports.deleteUserById = async (value) => {
  const result = {
    'result': await deleteUserById(value),
  }
  return result;
}

module.exports.searchUsers = async (value) => {
  const data = await searchUsers(value)
  const result = {
    'totalCount': data.length,
    'data': data,
  }
  return result;
}

module.exports.updateUser = async (value) => {
  const result = {
    'result': await updateUser(value),
  }
  return result;
}