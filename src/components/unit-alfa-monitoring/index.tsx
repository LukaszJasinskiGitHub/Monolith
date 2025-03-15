import React, { FC, useState } from "react";
import { Button, Stack } from "@mui/material";

import Chart from "./Chart";

export interface UnitAlfaMonitoringProps {
  simulateError?: boolean;
}

const UnitAlfaMonitoring: FC<UnitAlfaMonitoringProps> = ({ simulateError }) => {
  const [throwError, setThrowError] = useState(false)

  const handleSimulateError = () => {
    setThrowError(true)
  }

  if (throwError) { throw new Error('Błąd w komponencie unit-alfa-monitoring!'); }

  return (
    <Stack direction="column" flexWrap="wrap" alignItems="center">
      <Chart />

      {simulateError && (<Button
        variant='contained'
        color="error"
        sx={{ mx: 1, mb: 3 }}
        onClick={handleSimulateError}
      >
        Symuluj awarię komponentu
      </Button>)}
    </Stack>
  )
}

export default UnitAlfaMonitoring;