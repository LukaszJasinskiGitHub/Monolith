import React, { FC, useState } from "react";
import { Button, Stack } from "@mui/material";

import Chart from "./Chart";

export interface Props {
  isReversedData?: boolean;
}

export interface UnitBetaMonitoringProps {
  simulateError?: boolean;
  isReversedData?: boolean;
}

const UnitBetaMonitoring: FC<UnitBetaMonitoringProps> = ({
  simulateError,
  isReversedData,
}) => {
  const [throwError, setThrowError] = useState(false);

  const handleSimulateError = () => {
    setThrowError(true);
  };

  if (throwError) {
    throw new Error("Błąd w komponencie unit-beta-monitoring!");
  }

  return (
    <Stack direction="column" flexWrap="wrap" alignItems="center">
      <Chart isReversedData={!!isReversedData} />

      {simulateError && (<Button
        variant='contained'
        color="error"
        sx={{ mx: 1, mb: 3 }}
        onClick={handleSimulateError}
      >
        Symuluj awarię komponentu
      </Button>)}
    </Stack>
  );
};

export default UnitBetaMonitoring;
