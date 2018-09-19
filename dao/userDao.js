const sql = require('../config/default')

module.exports.getUsersByPage = async ({start, end}) => {
  var data = await sql.query(`SELECT * FROM users limit ${start}, ${end};`)
    .then(function(result) {
      return result;
    }, function(error){
      return -1;
    });
  return data;
}



