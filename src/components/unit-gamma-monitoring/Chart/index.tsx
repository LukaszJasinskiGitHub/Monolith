import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { Box, Stack, Typography } from "@mui/material";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, } from "recharts";

import { dataChart } from "../data/dataChart";


export interface ParsedDataInterface {
  date: string;
  load: string | number;
  generationPV: string | number;
  generationWind: string | number;
  setCharge1: string | number;
  setCharge2: string | number;
  chargeLevel1: string | number;
  chargeLevel2: string | number;
  balance: string | number;
}

enum ParsedDataKeys {
  DATE = "date",
  LOAD = "load",
  GENERATION_PV = "generationPV",
  GENERATION_WIND = "generationWind",
  SET_CHARGE1 = "setCharge1",
  SET_CHARGE2 = "setCharge2",
  CHARGE_LEVEL1 = "chargeLevel1",
  CHARGE_LEVEL2 = "chargeLevel2",
  BALANCE = "balance"
}

export default function ChartC() {
  const [parsedData, setParsedData] = useState<ParsedDataInterface[]>([]);

  useEffect(() => {
    Papa.parse(dataChart, {
      complete: function (results: { data: any[]; }) {
        const transformedData = results.data.filter(item => item[0] !== '').map(item => ({
          date: item[0],
          load: Number(item[1]),
          generationPV: Number(item[2]),
          generationWind: Number(item[3]),
          setCharge1: Number(item[4]),
          setCharge2: Number(item[5]),
          chargeLevel1: Number(item[6]),
          chargeLevel2: Number(item[7]),
          balance: Number(item[8]),
        }));

        setParsedData(transformedData);
      },
    });
  }, []);

  const dotProps = { r: 1 };
  const activeDotProps = { r: 6 };
  const lineType = "monotone";

  return (
    <Box
      component="section"
      flexDirection="column"
      sx={{ width: 800, height: 700, border: "1px solid gray", p: 2, mb: 2, mr: 2, boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)" }}
    >
      <Stack component="section" flexDirection="column" justifyContent="center" alignItems="center" sx={{ mb: 3, p: 0 }}>
        <Typography variant="h4" component="h2" sx={{ pb: 2, textTransform: "uppercase", textAlign: "center" }}>
          <strong>M2</strong> - Mikrosieć „Rye” w Norwegii
        </Typography>

        <LineChart width={780} height={400} data={parsedData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={ParsedDataKeys.DATE} />
          <YAxis domain={['dataMin', 'auto']} padding={{ top: 10, bottom: 10 }} allowDataOverflow={false} />
          <Tooltip />
          <Legend />

          <Line
            dataKey={ParsedDataKeys.LOAD}
            name="Odbiór [kW]"
            stroke="#1769aa"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.GENERATION_PV}
            name="Generacja PV [kW]"
            stroke="#8884d8"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.GENERATION_WIND}
            name="Generacja wiatr [kW]"
            stroke="#82ca9d"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.SET_CHARGE1}
            name="Zadane magazyn bateryjny [kW]"
            stroke="#ffc658"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.SET_CHARGE2}
            name="Zadane magazyn wodorowy [kW]"
            stroke="#EAB07B"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.CHARGE_LEVEL1}
            name="Magazyn bateryjny [kW]"
            stroke="#4615b2"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.CHARGE_LEVEL2}
            name="Magazyn wodorowy [kW]"
            stroke="#00a0b2"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.BALANCE}
            name="Bilans [kW]"
            stroke="#f50057"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />
        </LineChart>
      </Stack>

      <Typography gutterBottom variant="h2" component="div" sx={{ mt: 1 }}>
        <Stack component="section" flexDirection="column" justifyContent="center" sx={{ p: 0 }}>
          <Typography sx={{ pb: 1, fontSize: 18 }}>
            Odbiór o charakterze <strong>gospodarstw domowych</strong>
          </Typography>

          <Typography sx={{ pb: 1, fontSize: 18 }}>
            Generacja fotowoltaiczna PV: <strong>86.4 kWp</strong>
          </Typography>

          <Typography sx={{ pb: 1, fontSize: 18 }}>
            Generacja wiatrowa: <strong>225 kW</strong>
          </Typography>

          <Typography sx={{ pb: 1, fontSize: 18 }}>
            Bateryjny magazyn energii: <strong>550 kWh / 330 kWh</strong>
          </Typography>

          <Typography sx={{ pb: 1, fontSize: 18 }}>
            Wodorowy magazyn energii: <strong>elektrolizer 5 kW</strong> oraz <strong>ogniwo paliwowe 3.33 MWh</strong>
          </Typography>
        </Stack>
      </Typography>
    </Box>
  );
}
