export interface Country {
  name: {
    common: string;
    official: string;
  };
  currencies: string[];
  region: string;
  capital: string[];
  area: number;
  maps: string;
}
