import React, { useEffect, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import Papa from "papaparse";

import ControlTable from "./Table";
import { createRowData } from "./Table/utils";
import { dataControl } from "./data/dataControl";

export interface ParsedDataInterface {
  id: string | number;
  date: string;
  price: string;
  temperature: string;
  load: string;
  generationPV1a: string | number;
  generationPV1b: string | number;
  generationPV2: string | number;
  setChargeB1: string | number;
  setChargeB2: string | number;
  chargeLevelB1: string | number;
  chargeLevelB2: string | number;
}


const UnitEpsilonControl = () => {
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
          generationPV1a: item[5],
          generationPV1b: item[6],
          generationPV2: item[7],
          setChargeB1: item[8],
          setChargeB2: item[9],
          chargeLevelB1: item[10],
          chargeLevelB2: item[11],
        }));

        setParsedData(transformedData);
      },
    });
  }, []);

  const tableRows = useMemo(() => parsedData && parsedData.map((data) => {
    const { id, date, price, temperature, load, generationPV1a, generationPV1b, generationPV2, setChargeB1, setChargeB2, chargeLevelB1, chargeLevelB2 } = data;
    return createRowData(id, date, price, temperature, load, generationPV1a, generationPV1b, generationPV2, setChargeB1, setChargeB2, chargeLevelB1, chargeLevelB2);
  }), [parsedData]
  );

  return (
    <Box
      component="section"
      flexDirection="column"
      sx={{ maxWidth: 1400, border: "1px solid gray", p: 2, mb: 2, mr: 2, boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)" }}
    >
      <Typography gutterBottom variant="h2" component="div" sx={{ mt: 2, fontSize: 30 }}      >
        Magazyn <strong>M3</strong>
      </Typography>

      <Typography gutterBottom variant="h2" component="div" sx={{ mt: 1, fontSize: 16 }}>
        Wartość wyjściowa naładowania magazynu bateryjnego 1: {" "}
        <strong>{tableRows[0]?.chargeLevelB1}%</strong>
      </Typography>

      <Typography gutterBottom variant="h2" component="div" sx={{ mt: 1, mb: 3, fontSize: 16 }}>
        Wartość wyjściowa naładowania magazynu bateryjnego 2: {" "}
        <strong>{tableRows[0]?.chargeLevelB2}%</strong>
      </Typography>

      {tableRows && <ControlTable tableRows={tableRows} />}
    </Box>
  );
};

export default UnitEpsilonControl;
