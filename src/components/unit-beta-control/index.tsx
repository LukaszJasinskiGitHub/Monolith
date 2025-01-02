import React, { useEffect, useMemo, useState } from "react";
import { Typography, Box } from "@mui/material";
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
}


const UnitBetaControl = () => {
  const [parsedDataAll, setParsedDataAll] = useState<ParsedDataInterface[]>([]);

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
        }));

        setParsedDataAll(transformedData);
      },
    });
  }, []);

  const tableRows = useMemo(() => parsedDataAll && parsedDataAll.map((data) => {
    const { id, date, price, temperature, load, generation, setCharge } = data;

    return createRowData(id, date, price, temperature, load, generation, setCharge);
  }), [parsedDataAll]);

  return (
    <Box
      component="section"
      flexDirection="column"
      sx={{ width: 1400, border: "1px solid gray", p: 2, mb: 2, mr: 2, boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)" }}
    >
      <Typography gutterBottom variant="h2" component="div" sx={{ mt: 2, fontSize: 30 }}>
        Magazyn <strong>M4</strong>
      </Typography>

      <Typography gutterBottom variant="h2" component="div" sx={{ mt: 1, mb: 3, fontSize: 16 }}>
        Wartość wyjściowa naładowania: <strong>80%</strong>
      </Typography>

      {tableRows && <ControlTable tableRows={tableRows} />}
    </Box>
  );
};

export default UnitBetaControl;
