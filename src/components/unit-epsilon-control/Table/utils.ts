import { ParsedDataInterface } from "../";

export function createRowData(
  id: string | number,
  date: string,
  price: string,
  temperature: string,
  load: string,
  generationPV1a: string | number,
  generationPV1b: string | number,
  generationPV2: string | number,
  setChargeB1: string | number,
  setChargeB2: string | number,
  chargeLevelB1: string | number,
  chargeLevelB2: string | number
): ParsedDataInterface {
  return {
    id: Number(id),
    date,
    price,
    temperature,
    load,
    generationPV1a,
    generationPV1b,
    generationPV2,
    setChargeB1: Number(setChargeB1),
    setChargeB2: Number(setChargeB2),
    chargeLevelB1: Number(chargeLevelB1),
    chargeLevelB2: Number(chargeLevelB2),
  };
}
