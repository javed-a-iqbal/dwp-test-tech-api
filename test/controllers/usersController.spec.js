const chai = require("chai");
const chaiHttp = require("chai-http");
const fs = require('fs');
const controller = require('../../controllers/usersController');
const constants = require('../../controllers/utils/constants');
const { app } = require('../../app');

chai.use(chaiHttp);

describe('DWP-TEST-TECH-API usersController', () => {
  describe("usersController.getUsers", () => {
    it('Should respond with list of users with in 50 miles of london or in london', (done) => {
     
      const expected = JSON.parse(fs.readFileSync(`${__dirname}/../stubs/listUsers.json`));
         chai.request(app)
        .get('/users/people-living-in-london-or-within-50-miles')
        .end((err, res) => {
          // Assertion
          chai.expect(res).to.have.status(200);
          chai.expect(res.body).to.eql(expected);
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

  describe("usersController.getUserById", () => {
    it('Should respond with one users if correct id is used', (done) => {
       const expected = JSON.parse(fs.readFileSync(`${__dirname}/../stubs/userById.json`));
         chai.request(app)
        .get('/users/user-by-id/1')
        .end((err, res) => {
          // Assertion
          chai.expect(res).to.have.status(200);
          chai.expect(res.body).to.eql(expected);
          chai.expect(res.body.first_name).to.to.eql("Maurise");
          done();
        });
    })

    it('Should respond with error if invalid user id is used', (done) => {
       chai.request(app)
       .get('/users/user-by-id/11111')
       .end((err, res) => {
         // Assertion
       // console.log("body..."+res.body.message)
        //  chai.expect(res).to.have.status(200);
          chai.expect(res.body.message).to.to.eql("Request failed with status code 404");
         done();
       });
   })
 
  });

})

