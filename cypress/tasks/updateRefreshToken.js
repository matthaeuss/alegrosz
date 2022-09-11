const axios = require("axios");

const updateRefreshToken = (email, password) => {
  axios
    .post(`http://localhost:3001/login`, {
      email,
      password,
    })
    .then((response) => {
      const accessToken = response.data.accessToken;
      axios.put("http://localhost:3001/refresh/", {
        accessToken,
      });
    });
};

exports.updateRefreshToken = updateRefreshToken;
