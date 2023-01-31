const CustomError = require('../errors')
const { verifyToken } = require('../utils')

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token

  if (!token)
    throw new CustomError.UnauthenticatedError('Authentication Invalid')

  try {
    const { name, userID, role } = verifyToken({ token })
    req.user = { name, userID, role }
    next()
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid')
  }
}

module.exports = {
  authenticateUser,
}
