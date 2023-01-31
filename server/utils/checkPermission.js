const CustomError = require('../errors')

// candidateID is from token
// sourceID is from db
const checkPermission = (candidate, source) => {
  console.log(candidate, source)
  if (candidate.role === 'admin') return
  if (candidate.userID === source._id.toString()) return

  throw new CustomError.UnauthenticatedError('Unauthorized for this route')
}

module.exports = { checkPermission }
