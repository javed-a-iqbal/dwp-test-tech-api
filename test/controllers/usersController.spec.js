const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../app");
const expect = chai.expect;
const nock = require('nock');

const responseData = require('../stubs/data');
const controller = require('../../controllers/usersController');
const constants = require('../../controllers/utils/constants');

chai.use(chaiHttp);

describe('DWP-TEST-TECH-API usersController', () => {
  describe("usersController.getUsers", () => {
    it("should return list of users", async () => {
    });


  });

})
