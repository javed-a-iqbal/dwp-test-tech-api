const chai = require("chai");
const chaiHttp = require("chai-http");
const fs = require('fs');
const controller = require('../../controllers/usersController');
const constants = require('../../controllers/utils/constants');
const { app } = require('../../app');

chai.use(chaiHttp);

describe('DWP-TEST-TECH-API usersController', () => {
  describe("usersController.getUsers", () => {
    it('Should respond with list of users with in 50 miles of london or in london', () => {
     
      const expected = JSON.parse(fs.readFileSync(`${__dirname}/../stubs/listUsers.json`));
         chai.request(app)
        .get('/users/people-living-in-london-or-within-50-miles')
        .end((err, res) => {
          // Assertion
          chai.expect(res).to.have.status(200);
          chai.expect(res).to.eql(expected);
          done();
        });
    })

    it('Should respond with page not found if wrong route is used', (done) => {
     chai.request(app)
     .get('/users/people-livings')
     .end((err, res) => {
       // Assertion
       chai.expect(res).to.have.status(404);
       done()
     });
    })


  });

})

