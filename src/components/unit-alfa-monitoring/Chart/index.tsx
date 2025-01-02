import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { Box, Stack, Typography } from "@mui/material";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, } from "recharts";

import { dataChart } from "../data/dataChart";

export interface ParsedDataInterface {
  date: string;
  load: string | number;
  generation: string | number;
  setCharge: string | number;
  chargeLevel: string | number;
  balance: string | number;
}

enum ParsedDataKeys {
  DATE = "date",
  LOAD = "load",
  GENERATION = "generation",
  SET_CHARGE = "setCharge",
  CHARGE_LEVEL = "chargeLevel",
  BALANCE = "balance"
}

const dotProps = { r: 1 };
const activeDotProps = { r: 6 };
const lineType = "monotone";

export default function Chart() {
  const [parsedData, setParsedData] = useState<ParsedDataInterface[]>([]);

  useEffect(() => {
    Papa.parse(dataChart, {
      complete: function (results: { data: any[]; }) {
        const transformedData = results.data.filter(item => item[0] !== '').map(item => ({
          date: item[0],
          load: Number(item[1]),
          generation: Number(item[2]),
          setCharge: Number(item[3]),
          chargeLevel: Number(item[4]),
          balance: Number(item[5]),
        }));

        setParsedData(transformedData);
      },
    });
  }, []);

  return (
    <Box
      component="section"
      flexDirection="column"
      sx={{ width: 800, height: 700, border: "1px solid gray", p: 2, mb: 2, mr: 2, boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)" }}
    >
      <Stack component="section" flexDirection="column" justifyContent="center" alignItems="center" sx={{ mb: 3, p: 0 }}      >
        <Typography variant="h4" component="h2" sx={{ pb: 2, textTransform: "uppercase", textAlign: "center" }}        >
          <strong>M1</strong> - Mikrosieć „Lambda” we Włoszech
        </Typography>

        <LineChart width={780} height={400} data={parsedData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={ParsedDataKeys.DATE} />
          <YAxis domain={['dataMin', 'auto']} padding={{ top: 10, bottom: 10 }} allowDataOverflow={false} />
          <Tooltip />
          <Legend />

          <Line
            name="Odbiór [kW]"
            dataKey={ParsedDataKeys.LOAD}
            stroke="#8884d8"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            name="Generacja [kW]"
            dataKey={ParsedDataKeys.GENERATION}
            stroke="#82ca9d"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            name="Zadane magazyn [kW]"
            dataKey={ParsedDataKeys.SET_CHARGE}
            stroke="#ab003c"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            name="Magazyn [kW]"
            dataKey={ParsedDataKeys.CHARGE_LEVEL}
            stroke="#ffc658"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            name="Bilans [kW]"
            dataKey={ParsedDataKeys.BALANCE}
            stroke="#6DB0F1"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />
        </LineChart>
      </Stack>

      <Typography gutterBottom variant="h2" component="div" sx={{ mt: 1 }}>
        <Stack component="section" flexDirection="column" justifyContent="center" sx={{ p: 0 }}>
          <Typography sx={{ pb: 1, fontSize: 18 }}>
            Odbiór o charakterze <strong>urządzeń laboratoryjnych</strong>
          </Typography>

          <Typography sx={{ pb: 1, fontSize: 18 }}>
            Generacja fotowoltaiczna: <strong>12 kWp</strong>
          </Typography>

          <Typography sx={{ pb: 1, fontSize: 18 }}>
            Bateryjny magazyn: <strong>5 kWh / 2 kW</strong>
          </Typography>
        </Stack>
      </Typography>
    </Box>
  );
}
