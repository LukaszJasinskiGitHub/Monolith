import React, { FC } from "react";
import { Stack } from "@mui/material";

import Chart from "./Chart";

export interface Props {
  isReversedData?: boolean;
}

const UnitBetaMonitoring: FC<Props> = ({ isReversedData }) => (
  <Stack direction="column" flexWrap="wrap" alignItems="center">
    <Chart isReversedData={!!isReversedData} />
  </Stack>
);

export default UnitBetaMonitoring;