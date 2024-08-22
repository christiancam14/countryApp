import { CountryAPIResponse } from '../interfaces/api.response';
import { Country, Currencies, NativeName } from '../interfaces/country';

// Cambia el tipo de apiResponse a un array de CountryAPIResponse
export function mapApiResponseToCountry(
  apiResponse: CountryAPIResponse[]
): Country {
  // Toma el primer elemento del array
  const data = apiResponse[0];

  // Extraer los valores de la respuesta y mapearlos a la interfaz Country
  return {
    name: {
      common: data.name.common,
      official: data.name.official,
      nativeName: Object.keys(data.name.nativeName).reduce((acc, lang) => {
        acc[lang] = {
          common: data.name.nativeName[lang].common,
          official: data.name.nativeName[lang].official,
        };
        return acc;
      }, {} as { [key: string]: NativeName }),
    },
    currencies: Object.keys(data.currencies).reduce((acc, key) => {
      acc[key] = {
        name: data.currencies[key].name,
        symbol: data.currencies[key].symbol,
      };
      return acc;
    }, {} as Currencies),
    region: data.region,
    capital: data.capital,
    area: data.area,
    maps: {
      googleMaps: data.maps.googleMaps,
      openStreetMaps: data.maps.openStreetMaps,
    },
  };
}
