const jwt = require('jsonwebtoken')

//////////////////////////////////////////////////////
const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
  return token
}

//////////////////////////////////////////////////////
const attachCookiesToResponse = ({ res, user }) => {
  // create token
  const token = createJWT({ payload: user })

  // set interval > this case is 30 days
  const interval = 1000 * 60 * 60 * 24 * 30 // 30 days

  // attach token to cookie
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + interval),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  })
}

module.exports = { createJWT, attachCookiesToResponse }
