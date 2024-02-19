const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai
const baseUrl = require("../globalVariable/baseUrl");


const url = baseUrl; //define global variable

async function postMethod() {
  const response = await request(url)
    .post("/auth/sign-in")
    .set('Content-Type', 'application/json')
    .set('User-Agent', 'PostmanRuntime/7.28.4')
    .set('Accept', '*/*')
    .set('Accept-Encoding', 'gzip, deflate, br')
    .set('User-Agent', 'Connection')
    .send({
      username: "userstg1500",
      password: "Password123",
      deviceInfo : {
      deviceId : "56E8F561-81F6-4477-AAB9-F19D0D30D552"
    },
    });
  //assertation / verifikasi
  expect(response.status).to.equal(200);
  expect(response.body.username).to.equal("userstg1500");
  expect(response.body.password).to.equal("Password123");
  expect(response.deviceInfo.deviceId).to.equal("56E8F561-81F6-4477-AAB9-F19D0D30D552");
}

module.exports = { postMethod };