import React from "react";
import { Box } from '@mui/material';

import UnitAlfaMonitoring from "../components/unit-alfa-monitoring";
import UnitBetaMonitoring from "../components/unit-beta-monitoring";
import UnitAlfaControl from "../components/unit-alfa-control";
import UnitBetaControl from "../components/unit-beta-control";

const ErrorSimulation = () => (
  <Box component="section" flexDirection="column" sx={{ maxWidth: 1900, m: "50px auto" }}>
    <UnitAlfaMonitoring simulateError />
    <UnitBetaMonitoring simulateError />
    <UnitAlfaControl simulateError />
    <UnitBetaControl simulateError />
  </Box>
);

export default ErrorSimulation;