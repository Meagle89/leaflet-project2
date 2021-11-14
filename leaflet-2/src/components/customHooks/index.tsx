import { useEffect, useState } from "react";
import axios from 'axios';

function useUserLocate() {
  const [userPosition, setUserPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      setUserPosition([latitude, longitude]);
    });

  }, [userPosition]);
  return ({userPosition, setUserPosition});
}

interface ICountry {
  name: string,
  code: string,
  numericCode: string
}
function useCountryAPI() {
  const [countryList, setCountryList] = useState<ICountry[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get<ICountry[]>("https://restcountries.com/v2/all?fields=name,alpha2Code,numericCode")
    .then(response => {
      const sortedCountries = response.data.sort();
      setCountryList(sortedCountries);
      setLoading(false);
    }).catch(
      ex => {
        const error =
        ex.response.status === 404
          ? "Resource Not found"
          : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);
  return {countryList, error, loading }
}

export {
  useUserLocate,
  useCountryAPI
} ;