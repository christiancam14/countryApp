import { CountryAPIResponse } from '../interfaces/api.response';
import { Country } from '../interfaces/country';

export function mapApiResponseToCountry(
  apiResponse: CountryAPIResponse[]
): Country {
  const data = apiResponse[0];

  return {
    name: {
      common: data.name.common,
      official: data.name.official,
    },
    currencies: Object.values(data.currencies).map((currency) => currency.name),
    region: data.region,
    capital: data.capital,
    area: data.area,
    maps: data.maps.googleMaps,
  };
}
