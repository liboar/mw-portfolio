const axios = require("axios")

export function handler(event, context, callback) {
  const receivedBody = JSON.parse(event.body)

  axios
    .post("https://v1.nocodeapi.com/lachman645/telegram/lqUEZccVgmyLCPXs", {
      text: `Name: ${receivedBody.contactName}, email: ${receivedBody.email}, message: ${receivedBody.message}`,
    })

    // console
    //   .log(receivedBody)

    .then(function (res) {
      callback(null, {
        statusCode: 200,
        body: res.data.title,
      })
    })
    .catch(function (err) {
      callback(err)
    })
}