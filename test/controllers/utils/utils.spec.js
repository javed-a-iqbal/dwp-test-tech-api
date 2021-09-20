const chai = require("chai");
const fs = require('fs');
const expect = chai.expect;
const utils = require('../../../controllers/utils/utils');


//const mockedUsers = JSON.parse(fs.readFileSync(`${__dirname}/userById.json`));
//const mock = new MockAdapter(axios);

describe("Utils.getDistance", () => {
    it("calculate distance between two  valid co-ordinate sets", async () => {
        const p1 = { latitude: 51.509865, longitude: -0.118092 };
        const p2 = { latitude: 51.752022, longitude: -1.257677 };
        const result = utils.getDistance(p1, p2);
        return expect(result).to.equal(51.716102958721066);
    })

    it("return NaN if invalid co-ordinate value used", async () => {
        const p1 = { latitude: 'x', longitude: -0.118092 };
        const p2 = { latitude: 51.752022, longitude:'kkk'};
        const result = utils.getDistance(p1, p2);
        return expect(result).to.be.NaN;
    })
});

describe('utils.userById', () => {
     it('Should return one user related data',  function(done) {
        utils.userById(2).then((response)=>{
        expect(response.data).to.have.a.property('id');
        expect(response.data.id).to.equal(2);  
    }).then(done, done); //to chain a then(done, done) which handles both resolve and reject of the promise.
  });

  it('Should display error message when invalid id used',  function(done) {
    const userId=34232;
    utils.userById(userId).then((response)=>{
   
}).catch(resp => {
    let data = resp.response.data;
    expect(resp.response.status).to.equal(404); 
    expect(data.message).to.eql(`Id ${userId} doesn't exist. You have requested this URI [/user/${userId}] but did you mean /user/<string:id> ?`)
      }).then(done, done) 
});
   
});

