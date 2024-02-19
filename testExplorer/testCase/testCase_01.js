const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai
const baseUrl = require("../globalVariable/baseUrl");
const { postMethod } = require("../apiServer/apiObjects");

//Test Suites
describe("Testing Login", function(){
    let id;
    //Test Case 01
    it("Test POST Login", async function(){
        await postMethod();
    });
});