import axios from "axios";
import { IBeers } from "../types/Beers";

export const getBeers = async () => {
  const response = await axios.get<IBeers[]>(`https://api.punkapi.com/v2/beers`);
  return response.data;
};

export const getBeersByName = async (name: string) => {
  const response = await axios.get<IBeers[]>(`https://api.punkapi.com/v2/beers?beer_name=${name}`);
  return response.data;
};

// export const getBeerById = async (id: number) => {
//   const response = await axios.get<IBeers>(`https://api.punkapi.com/v2/beers/${id}`);
//   return response.data;
// };

