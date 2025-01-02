import { ParsedDataInterface } from "../";

export function createRowData(
  id: string | number,
  date: string,
  price: string,
  temperature: string,
  load: string,
  generation: string,
  setCharge: string | number
): ParsedDataInterface {
  return {
    id: Number(id),
    date,
    price,
    temperature,
    load,
    generation,
    setCharge: Number(setCharge),
  };
}
