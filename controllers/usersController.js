const axios = require('axios')
const geolib = require('geolib')
const _ = require('lodash')
const constants = require('./utils/constants')
const utils = require('./utils/utils')
require('dotenv').config()
const successLog = require('../logger/logger').successLog
const errorLog = require('../logger/logger').errorLog
const auditLog = require('../logger/logger').auditLog
const productMessages = require('../common-enum').productMessages



const getUsers = async (req, res) => {
  try {
    const usersByCity = utils.getUsersOfCity(constants.LondonCity)
    const usersByDistance = utils.getUsersInGivenDistance(`${process.env.LONDON_GEO_COORDINATES}`, 50)
    const [UsersInLondon, UsersInGivenDistance] = await Promise.all([usersByCity, usersByDistance])
    auditLog.info("Request for people with in 50 mile or in london completed", { type: 'audit', archetype: 'CN01', product: productMessages.productName.value, emailId: process.env.EMAIL_ADDRESS, productType: 'api data', tags: 'analytics' })
    res.status(200).json(_.union(UsersInLondon.data, UsersInGivenDistance))
  } catch (errors) {
    errorLog.error("Error during exeution " + errors)
    res.send(errors)
  }
}



module.exports = {
  getUsers
}
