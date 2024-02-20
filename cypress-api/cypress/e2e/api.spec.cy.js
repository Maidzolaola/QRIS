import { tokenGlobal } from '../support/e2e'

const jsonSchemaLogin = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Root",
  "type": "object",
  "properties": {
    "timestamp": {
      "type": "number"
    },
    "statusCode": {
      "type": "string"
    },
    "statusDescription": {
      "type": "string"
    },
    "data": {
      "type": "object",
      "properties": {
        "accessToken": {
          "type": "string"
        },
        "pinExist": {
          "type": "boolean"
        },
        "pinLocked": {
          "type": "boolean"
        }
      },
      "required": [
        "accessToken",
        "pinExist",
        "pinLocked"
      ]
    }
  },
  "required": [
    "timestamp",
    "statusCode",
    "statusDescription",
    "data"
  ]
}

describe('Test API Ciam', () => {
  

 
    it('Transaction Detail', () => {
      cy.request({
        method: 'GET',
        url: 'https://transaction.stg.hijra.dev/api/v1/qris/transaction?transactionId=1c16c54c531a40be',
        auth: {
          'bearer': tokenGlobal
        }
      }).then((response) => {
        cy.log(response)
        console.log(response)
        expect(response.status).is.equal(200)
      })
    })
})
  