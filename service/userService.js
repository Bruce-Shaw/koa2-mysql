const { getUsersByPage } = require("../dao/userDao.js")

module.exports.getUsersByPage = async (start, end) => {
  return await getUsersByPage(start, end)
}