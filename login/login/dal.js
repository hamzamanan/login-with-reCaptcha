const Users = require("./model");

async function signUp({ username, password }) {
  try {
    const createUsers = await Users.create(
      [
        {
          username,
          password,
        },
      ],
      { validateBeforeSave: false }
    );
    return createUsers;
  } catch (error) {
    throw error;
  }
}
async function login({ username }) {
  try {
    const loginUsers = await Users.findOne({
      username,
    });
    console.log(loginUsers);
    return loginUsers;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  signUp,
  login,
};
