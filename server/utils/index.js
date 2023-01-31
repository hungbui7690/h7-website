const {
  createJWT,
  verifyToken,
  attachCookiesToResponse,
} = require('../utils/jwt')

const { createTokenUser } = require('../utils/createTokenUser')
const { checkPermission } = require('../utils/checkPermission')

module.exports = {
  createJWT,
  verifyToken,
  attachCookiesToResponse,
  createTokenUser,
  checkPermission,
}
