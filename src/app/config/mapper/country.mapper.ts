import { CountryAPIResponse } from '../interfaces/api.response';
import { Country } from '../interfaces/country';

export function mapApiResponseToCountry(
  apiResponse: CountryAPIResponse[]
): Country {
  // Solo tomamos el primer elemento de la respuesta, ya que `apiResponse` es un array.
  const data = apiResponse[0];

  // Extraer los valores y mapearlos a la interfaz Country
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
