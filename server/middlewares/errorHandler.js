const errorHandler = (err, req, res, next) => {
  switch (err.name) {
      case 'SequelizeValidationError':
          res.status(400).json(
              err.errors.map(err => {
                  return { message: err.message }
              })
          )
          break
      case 'SequelizeUniqueContraintError':
          res.status(400).json({ message: 'Input has been existed in the database' })
          break
      case 'InvalidAccessToken':
          res.status(401).json({ message: 'Please log in first' })
          break
      case 'InvalidInput':
          res.status(400).json({ message: 'Wrong username or password' })
          break;
      case 'NotFound':
          res.status(404).json({ message: 'Not Found'})
          break
      default:
          res.status(500).json({ message: 'Internal Server Error'})
          break
  }
}

module.exports = errorHandler