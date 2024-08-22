export interface NativeName {
  official: string;
  common: string;
}

export interface Currencies {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: NativeName;
    };
  };
  currencies: Currencies;
  region: string;
  capital: string[];
  area: number;
  maps: Maps;
}
