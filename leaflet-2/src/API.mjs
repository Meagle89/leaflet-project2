import axios from 'axios';

async function getAllCountriesData() {
  try {
    const response = await axios.get("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getCountryData(country) {
  try {
    const response = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}


export {
  getCountryData,
  getAllCountriesData
}
