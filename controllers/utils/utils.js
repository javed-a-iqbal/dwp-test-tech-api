const axios = require('axios')
const geolib = require('geolib')
const _ = require('lodash')
const constants = require('../utils/constants')
const utils = require('../utils/utils')
require('dotenv').config()

const getAllUsers = () => axios.get(`${process.env.API_URL}/users`)
const getUsersOfCity = (city) => axios.get(`${process.env.API_URL}/city/${city}/users`)

const getDistance = (from, to) => {
  const distanceInMetres = geolib.getDistance(from, to)
  return geolib.convertDistance(distanceInMetres, 'mi')
}

const getUsersInGivenDistance = async (GeoCoordinates, distance) => {
  const allUsers = await getAllUsers()
  return allUsers.data.filter(({ latitude, longitude }) => {
    return getDistance(GeoCoordinates, { latitude, longitude }) <= distance
  })
}

const userById = (id) => axios.get(`${process.env.API_URL}/user/${id}`)

module.exports = {
  getUsersOfCity,
  getUsersInGivenDistance,
  getDistance,
  userById
}