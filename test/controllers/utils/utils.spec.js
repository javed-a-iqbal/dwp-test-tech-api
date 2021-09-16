const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const utils = require('../../../controllers/utils/utils')

describe("Utils.getDistance", () => {
    it("calculate distance between two  valid co-ordinate sets", async () => {
        const p1 = { latitude: 51.509865, longitude: -0.118092 };
        const p2 = { latitude: 51.752022, longitude: -1.257677 };
        const result = utils.getDistance(p1, p2);
        return expect(result).to.equal(51.716102958721066);
    })
});

