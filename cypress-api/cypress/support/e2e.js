import './commands'
chai.use(require('chai-json-schema'));
export let tokenGlobal;
// Alternatively you can use CommonJS syntax:
// require('./commands')
before('run this step before execution', () => {
  

    cy.request({
        method: 'POST',
        url: 'https://ciam.stg.hijra.dev/api/v1/auth/sign-in',
        body: {
            "username": "userstg1500",
            "passwd": "Password123",
            "deviceInfo" : [{
                "deviceId" : "56E8F561-81F6-4477-AAB9-F19D0D30D552"
            }]
        }
    }).then((response) => {
        cy.log(response)
        console.log(response)
        cy.log('ini adalah token', response.body.data.accessToken)
        tokenGlobal = response.body.data.accessToken // isi value si token
        })

});
