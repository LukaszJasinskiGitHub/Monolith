import React, { useState, useEffect, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import ControlTable from "./Table";
import Papa from "papaparse";

import { dataControl } from "./data/dataControl";
import { createRowData } from "./Table/utils";

export interface ParsedDataInterface {
  id: string | number;
  date: string;
  price: string;
  temperature: string;
  load: string;
  generationPV: string;
  generationW: string;
  setChargeB: string | number;
  setChargeW: string | number;
  chargeLevelB: string | number;
  chargeLevelW: string | number;
}


const UnitGammaControl = () => {
  const [parsedData, setParsedData] = useState<ParsedDataInterface[]>([]);

  useEffect(() => {
    Papa.parse(dataControl, {
      complete: function (results: { data: any[]; }) {
        const transformedData = results.data.filter(item => item[0] !== '').map(item => ({
          id: item[0],
          date: item[1],
          price: item[2],
          temperature: item[3],
          load: item[4],
          generationPV: item[5],
          generationW: item[6],
          setChargeB: item[7],
          setChargeW: item[8],
          chargeLevelB: item[9],
          chargeLevelW: item[10]
        }));

        setParsedData(transformedData);
      },
    });
  }, []);

  const tableRows = useMemo(() => parsedData && parsedData.map((data) => {
    const { id, date, price, temperature, load, generationPV, generationW, setChargeB, chargeLevelB, setChargeW, chargeLevelW } = data;

    return createRowData(id, date, price, temperature, load, generationPV, generationW, setChargeB, chargeLevelB, setChargeW, chargeLevelW);
  }), [parsedData]);

  return (
    <Box
      component="section"
      flexDirection="column"
      sx={{ maxWidth: 1400, border: "1px solid gray", p: 2, mb: 2, mr: 2, boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)" }}
    >
      <Typography gutterBottom variant="h2" component="div" sx={{ mt: 2, fontSize: 30 }}>
        Magazyn <strong>M2</strong>
      </Typography>

      <Typography gutterBottom variant="h2" component="div" sx={{ mt: 1, fontSize: 16 }}>
        Wartość wyjściowa naładowania magazynu bateryjnego{" "}
        <strong>{tableRows[0]?.chargeLevelB}%</strong>
      </Typography>

      <Typography gutterBottom variant="h2" component="div" sx={{ mt: 1, mb: 3, fontSize: 16 }}>
        Wartość wyjściowa naładowania magazynu wodorowego{" "}
        <strong>{tableRows[0]?.chargeLevelW}%</strong>
      </Typography>

      {tableRows && <ControlTable tableRows={tableRows} />}
    </Box>
  );
};

export default UnitGammaControl;
