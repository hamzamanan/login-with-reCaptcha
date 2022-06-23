const Users = require("./dal");

async function createUsers(req, res) {
  try {
    let { username, password } = req.body;
    const createUsers = await Users.signUp({ username, password });

    if (createUsers) {
      res.status(200).send({
        success: true,
        data: createUsers,
        message: "users is created",
      });
    } else {
      res.status(409).send({
        success: false,
        data: null,
        message: "something is wrong",
      });
    }
  } catch (error) {
    throw error;
  }
}
async function signIn(req, res) {
  try {
    let { username, password } = req.body;
    console.log(username);
    const getUsers = await Users.login({ username });
    if (!getUsers) {
      res.status(409).send({
        success: false,
        message: "user does not exist",
      });
    } else if (getUsers.password !== password) {
      res.status(409).send({
        success: false,
        message: "incorrect password",
      });
    }
    res.status(200).send({
      success: true,
      message: "logged in",
      data: getUsers,
    });
  } catch (error) {
    throw error;
  }
}

module.exports = { createUsers, signIn };
