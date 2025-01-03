import { ParsedDataInterface } from "../";

export function createRowData(
  id: string | number,
  date: string,
  price: string,
  temperature: string,
  load: string,
  generationPV: string,
  generationW: string,
  setChargeB: string | number,
  chargeLevelB: string | number,
  setChargeW: string | number,
  chargeLevelW: string | number
): ParsedDataInterface {
  return {
    id: Number(id),
    date,
    price,
    temperature,
    load,
    generationPV,
    generationW,
    setChargeB: Number(setChargeB),
    chargeLevelB: Number(chargeLevelB),
    setChargeW: Number(setChargeW),
    chargeLevelW: Number(chargeLevelW),
  };
}
