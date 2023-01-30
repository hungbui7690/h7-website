const createTokenUser = (user) => {
  return { name: user.username, userID: user._id, role: user.role }
}

module.exports = { createTokenUser }
