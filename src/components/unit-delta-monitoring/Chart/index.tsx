import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { Box, Stack, Typography } from "@mui/material";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, } from "recharts";

import { dataChart } from "../data/dataChart";

export interface ParsedDataInterface {
  date: string;
  generationPV1: string | number;
  generationPV2: string | number;
  generationPV3: string | number;
  load1: string | number;
  load2: string | number;
  load3: string | number;
  load4: string | number;
  load5: string | number;
  load6: string | number;
  load7: string | number;
  load8: string | number;
  load9: string | number;
  load10: string | number;
  load11: string | number;
  load12: string | number;
  load13: string | number;
  load14: string | number;
  load15: string | number;
  generationSummary: string | number;
  loadSummary: string | number;
  balance: string | number;
}

enum ParsedDataKeys {
  DATE = "date",
  GENERATION_PV1 = "generationPV1",
  GENERATION_PV2 = "generationPV2",
  GENERATION_PV3 = "generationPV3",
  LOAD1 = "load1",
  LOAD2 = "load2",
  LOAD3 = "load3",
  LOAD4 = "load4",
  LOAD5 = "load5",
  LOAD6 = "load6",
  LOAD7 = "load7",
  LOAD8 = "load8",
  LOAD9 = "load9",
  LOAD10 = "load10",
  LOAD11 = "load11",
  LOAD12 = "load12",
  LOAD13 = "load13",
  LOAD14 = "load14",
  LOAD15 = "load15",
  GENERATION_SUMMARY = "generationSummary",
  LOAD_SUMMARY = "loadSummary",
  BALANCE = "balance"
}

export default function Chart() {
  const [parsedData, setParsedData] = useState<ParsedDataInterface[]>([]);

  useEffect(() => {
    Papa.parse(dataChart, {
      complete: function (results: { data: any[]; }) {
        const transformedData = results.data.filter(item => item[0] !== '').map(item => ({
          date: item[0],
          generationPV1: Number(item[1]),
          generationPV2: Number(item[2]),
          generationPV3: Number(item[3]),
          load1: Number(item[4]),
          load2: Number(item[5]),
          load3: Number(item[6]),
          load4: Number(item[7]),
          load5: Number(item[8]),
          load6: Number(item[9]),
          load7: Number(item[10]),
          load8: Number(item[11]),
          load9: Number(item[12]),
          load10: Number(item[13]),
          load11: Number(item[14]),
          load12: Number(item[15]),
          load13: Number(item[16]),
          load14: Number(item[17]),
          load15: Number(item[18]),
          generationSummary: Number(item[19]),
          loadSummary: Number(item[20]),
          balance: Number(item[21]),
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
          <strong>M5</strong> - Dom wielorodzinny z instalacjami fotowoltaicznymi w Portugalii
        </Typography>

        <LineChart width={780} height={400} data={parsedData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={ParsedDataKeys.DATE} />
          <YAxis domain={['dataMin', 'auto']} padding={{ top: 10, bottom: 10 }} allowDataOverflow={false} />
          <Tooltip />
          <Legend />

          <Line
            dataKey={ParsedDataKeys.GENERATION_PV1}
            name="Generacja PV1 [kW]"
            stroke="#8884d8"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.GENERATION_PV2}
            name="Generacja PV2 [kW]"
            stroke="#82ca9d"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.GENERATION_PV3}
            name="Generacja PV3 [kW]"
            stroke="#ffc658"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD1}
            name="Odbiorca1 [kW]"
            stroke="#EAB07B"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD2}
            name="Odbiorca2 [kW]"
            stroke="#FFE4F6"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD3}
            name="Odbiorca3 [kW]"
            stroke="#F6B4D5"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD4}
            name="Odbiorca4 [kW]"
            stroke="#C7FEB8"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD5}
            name="Odbiorca5 [kW]"
            stroke="#1769aa"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD6}
            name="Odbiorca6 [kW]"
            stroke="#ab003c"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD7}
            name="Odbiorca7 [kW]"
            stroke="#ff9100"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD8}
            name="Odbiorca8 [kW]"
            stroke="#b26500"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD9}
            name="Odbiorca9 [kW]"
            stroke="#834bff"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD10}
            name="Odbiorca10 [kW]"
            stroke="#4615b2"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD11}
            name="Odbiorca11 [kW]"
            stroke="#14a37f"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD12}
            name="Odbiorca12 [kW]"
            stroke="#ab003c"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD13}
            name="Odbiorca13 [kW]"
            stroke="#f50057"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD14}
            name="Odbiorca14 [kW]"
            stroke="#8ab200"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD15}
            name="Odbiorca15 [kW]"
            stroke="#00a0b2"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.GENERATION_SUMMARY}
            name="PV Łącznie [kW]"
            stroke="#b2a300"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.LOAD_SUMMARY}
            name="Odbiór Łącznie [kW]"
            stroke="#357a38"
            type={lineType}
            dot={dotProps}
            activeDot={activeDotProps}
          />

          <Line
            dataKey={ParsedDataKeys.BALANCE}
            name="Bilans [kW]"
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
            Odbiór o charakterze <strong>komunalnym w budynku z 15 rodzinami</strong>
          </Typography>

          <Typography sx={{ pb: 1, fontSize: 18 }}>
            Generacja fotowoltaiczna PV1-PV3: <strong>jednofazowe instalacje </strong>
          </Typography>
        </Stack>
      </Typography>
    </Box>
  );
}
