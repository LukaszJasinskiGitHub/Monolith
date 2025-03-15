import React, { useEffect, useMemo, useState, FC } from "react";
import { Typography, Box, Button } from "@mui/material";
import Papa from "papaparse";

import ControlTable from "./Table";
import { dataControl } from "./data/dataControl";
import { createRowData } from "./Table/utils";

export interface ParsedDataInterface {
  id: string | number;
  date: string;
  price: string;
  temperature: string;
  load: string;
  generation: string;
  setCharge: string | number;
  chargeLevel: string | number;
}

export interface UnitAlfaControlProps {
  simulateError?: boolean;
}

const UnitAlfaControl: FC<UnitAlfaControlProps> = ({ simulateError }) => {
  const [parsedData, setParsedData] = useState<ParsedDataInterface[]>([]);
  const [throwError, setThrowError] = useState(false)

  const handleSimulateError = () => {
    setThrowError(true)
  }

  if (throwError) { throw new Error('Błąd w komponencie unit-alfa-control!'); }


  useEffect(() => {
    Papa.parse(dataControl, {
      complete: function (results: { data: any[]; }) {
        const transformedData = results.data.filter(item => item[0] !== '').map(item => ({
          id: item[0],
          date: item[1],
          price: item[2],
          temperature: item[3],
          load: item[4],
          generation: item[5],
          setCharge: item[6],
          chargeLevel: item[7]
        }));

        setParsedData(transformedData);
      },
    });
  }, []);


  const tableRows = useMemo(() => parsedData && parsedData.map((data) => {
    const { id, date, price, temperature, load, generation, setCharge, chargeLevel } = data;
    return createRowData(id, date, price, temperature, load, generation, setCharge, chargeLevel);
  }), [parsedData]);

  return (
    <Box
      component="section"
      flexDirection="column"
      sx={{ maxWidth: 1400, border: "1px solid gray", p: 2, mb: 2, mr: 2, boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)" }}
    >
      <Typography gutterBottom variant="h2" component="div" sx={{ mt: 2, fontSize: 30 }}>
        Magazyn <strong>M1</strong>
      </Typography>

      <Typography gutterBottom variant="h2" component="div" sx={{ mt: 1, mb: 3, fontSize: 16 }}>
        Wartość wyjściowa naładowania:{" "}
        <strong>{tableRows[0]?.chargeLevel}%</strong>
      </Typography>

      {tableRows && <ControlTable tableRows={tableRows} />}

      {simulateError && (<Button
        variant='contained'
        color="error"
        sx={{ mx: 1, mt: 3 }}
        onClick={handleSimulateError}
      >
        Symuluj awarię komponentu
      </Button>)}
    </Box>
  );
};

export default UnitAlfaControl;