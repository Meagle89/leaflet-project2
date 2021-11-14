import { useCountryAPI } from "../customHooks";

function SelectCountry() {
  const {error, loading, countryList} = useCountryAPI();

  if (error && !loading) {
    return(
      <p className="error">{error}</p>
    )
  } else {
    return (
      <select>
        {(countryList).map(function(country) {
         return <option key={country.numericCode} value={country.code}>{country.name}</option>
        })}
      </select>
    );
  }
}

export {
  SelectCountry,
}