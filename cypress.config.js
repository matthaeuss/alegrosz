const { defineConfig } = require("cypress");
const { removeDefaultUser } = require("./cypress/tasks/removeUser");
const { updateRefreshToken } = require("./cypress/tasks/updateRefreshToken");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        removeUser({ id }) {
          removeDefaultUser(id);
          return null;
        },
        refreshToken({ email, password }) {
          updateRefreshToken(email, password);
          return null;
        },
      });
    },
    baseUrl: "http://localhost:3000",
  },
});
