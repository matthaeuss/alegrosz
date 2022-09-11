const axios = require("axios");
const removeDefaultUser = (id) => {
  axios.delete(`http:localhost3001/users/${id}`).catch(() => {});
};

exports.removeDefaultUser = removeDefaultUser;
