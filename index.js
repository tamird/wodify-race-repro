import fetch, {
  Response
} from 'node-fetch'

// Fill these in.
const ClassId = "1234"
const TenantId = "2345"
const UserId = "3456"
const csrfToken = "abcd1234"
const cookie = [
  "nr1W_Theme_UI=needthisonetoo",
  "nr2W_Theme_UI=needthisone",
].join(';')

(async () => {
  const responses = await Promise.all([...Array(50).keys()].map(async () => {
    const body = {
      "versionInfo": {
        "moduleVersion": "RawAt815slRJE0dgbp4ccg",
        "apiVersion": "1AJRlWfa59_3jei3j+OUmA"
      },
      "viewName": "Classes.Class",
      "inputParameters": {
        "Request": {
          ClassId,
          TenantId,
          UserId,
        }
      }
    }
    const response = await fetch("https://app.wodify.com/WodifyClient/screenservices/WodifyClient_Class/Classes/Class/ServiceAPICreateClassReservation", {
      headers: {
        'accept-encoding': 'gzip, deflate',
        'accept-language': 'en-US',
        'content-type': 'application/json; charset=UTF-8',
        "x-csrftoken": csrfToken,
        cookie,
      },
      body: JSON.stringify(body),
      method: 'POST',
    })
    return await response.json()
  }))
  for (const response of responses) {
    console.log(`response=${JSON.stringify(response)}`)
  }
})()
