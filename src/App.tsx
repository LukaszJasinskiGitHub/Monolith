import React, { Suspense, lazy } from "react";
import { Stack, Box, Typography, LinearProgress } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { RoutesVars } from "./constants/constRoutes";

import "./App.css";

const UnitAlfaMonitoring = lazy(() => import("../src/components/unit-alfa-monitoring"));
const UnitBetaMonitoring = lazy(() => import("../src/components/unit-beta-monitoring"));
const UnitGammaMonitoring = lazy(() => import("../src/components/unit-gamma-monitoring"));
const UnitDeltaMonitoring = lazy(() => import("../src/components/unit-delta-monitoring"));
const UnitEpsilonMonitoring = lazy(() => import("../src/components/unit-epsilon-monitoring"));

const UnitAlfaControl = lazy(() => import("../src/components/unit-alfa-control"));
const UnitBetaControl = lazy(() => import("../src/components/unit-beta-control"));
const UnitGammaControl = lazy(() => import("../src/components/unit-gamma-control"));


const App = () => {
  const MissingRoute = () => <Navigate to={{ pathname: RoutesVars.HOME }} replace />;

  return (
    <BrowserRouter>
      <Box component="section" flexDirection="column" sx={{ maxWidth: 1900, m: "0 auto" }}>
        {/* Navigation Placeholder */}

        <Suspense fallback={
          <Box sx={{ margin: 20 }} display="flex" alignItems="center" flexDirection="column">
            <LinearProgress sx={{ mb: 3, width: "100%", height: 10 }} />
            <Typography gutterBottom variant="h2" component="div">Ładowanie Microfrontendu...</Typography>
          </Box>
        }>
          <Routes>
            <Route path={RoutesVars.HOME} element={
              <Box component="section" sx={{ px: 5, py: 10 }}>
                <Stack flexDirection="column" alignItems="center">
                  <Typography variant="h2">Panel Monitorowania</Typography>
                  <Stack flexDirection="row" alignItems="center" justifyContent="center" flexWrap="wrap">
                    <UnitAlfaMonitoring />
                    <UnitGammaMonitoring />
                    <UnitEpsilonMonitoring />
                    <UnitBetaMonitoring />
                    <UnitDeltaMonitoring />
                  </Stack>
                </Stack>

                <Stack flexDirection="column" alignItems="center" sx={{ mt: 8 }}>
                  <Typography variant="h2">Panel Sterowania</Typography>
                  <Stack flexDirection="row" alignItems="center" justifyContent="center" flexWrap="wrap">
                    <UnitAlfaControl />
                    <UnitGammaControl />
                    <UnitBetaControl />
                  </Stack>
                </Stack>
              </Box>
            } />
            <Route path="*" element={<MissingRoute />} />
          </Routes>
        </Suspense>
      </Box>
    </BrowserRouter>
  );
}

export default App;
