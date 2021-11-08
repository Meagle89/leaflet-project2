const axios = require('axios').default;


async function getAllCountriesData() {
  try {
    const response = await axios.get("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

getAllCountriesData();

// export {
// }
