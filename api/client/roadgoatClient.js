const fetch = require("node-fetch");
const roadApi = require("./roadapi");
const roadSecret = require("./roadsecret");

class RoadgoatClient {
  loadCity(city) {
    const url = `https://api.roadgoat.com/api/v2/destinations/${city}`;
    const auth =
      "Basic " + Buffer.from(roadApi + ":" + roadSecret).toString("base64");
    const options = {
      headers: {
        Authorization: auth,
      },
    };
    return fetch(url, options)
      .then((response) => response.json())
      .then((city) => {
        return city;
      })
      .catch((error) => {
        return error;
      });
  }
}

module.exports = RoadgoatClient;
