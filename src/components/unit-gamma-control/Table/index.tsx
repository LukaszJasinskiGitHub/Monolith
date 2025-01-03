import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { ParsedDataInterface } from "../";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 0,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "date",
    headerName: "Data",
    flex: 15,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "price",
    headerName: "Cena [zł]",
    flex: 10,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "temperature",
    headerName: "Temp (°C)",
    flex: 10,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "load",
    headerName: "Odbiór [kW]",
    flex: 10,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "generationPV",
    headerName: "Generacja PV [kW]",
    flex: 15,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "generationW",
    headerName: "Generacja wiatr [kW]",
    flex: 18,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "chargeLevelB",
    headerName: "SOC zasobnik bateryjny [%]",
    flex: 25,
    type: "number",
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "setChargeB",
    headerName: "Zadaj moc magazyn bateryjny [%]",
    editable: true,
    flex: 28,
    type: "number",
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "chargeLevelW",
    headerName: "SOC magazyn wodorowy [%]",
    flex: 25,
    type: "number",
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "setChargeW",
    headerName: "Zadaj moc magazyn wodorowy [%]",
    editable: true,
    flex: 28,
    type: "number",
    headerAlign: "center",
    align: "center",
    sortable: false
  },
];


const ControlTable = ({ tableRows }: { tableRows: ParsedDataInterface[] }) => {
  if (!tableRows) return <div>Ładowanie..</div>;

  return (
    <div style={{ height: 550, width: "100%", overflowX: 'scroll', }}>
      <DataGrid
        rows={tableRows}
        columns={columns}
        disableColumnMenu
        sx={{ minWidth: 1800 }}
        loading={!tableRows.length}
        columnVisibilityModel={{ id: false }}
        pageSizeOptions={[5, 10, 15, 20, 100]}
        localeText={{
          MuiTablePagination: {
            labelRowsPerPage: "Pozycje na stronie",
            labelDisplayedRows: function defaultLabelDisplayedRows({ from, to, count, }) {
              return `${from}–${to} z ${count !== -1 ? count : `więcej niż ${to}`}`;
            },
          },
        }}
      />
    </div>
  );
}
export default ControlTable;
