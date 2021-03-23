const { Admin } = require('../models')
const { checkToken } = require('../helpers/jwt')

const authenticate = async (req, res, next) => {
  const decoded = checkToken(req.headers.access_token)
  try {
    const admin = await Admin.findOne({
      where: {
        username: decoded.username
      }
    })
    if (admin) {
      req.admin = {
        id: admin.id
      }
      next()
    } else {
      throw {
        name: 'InvalidAccessToken'
      }
    }
  }
  catch(err) {
    next(err)
  }
}

module.exports = authenticate