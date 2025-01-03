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
    flex: 20,
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
    flex: 13,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "generationPV1a",
    headerName: "Generacja PV1a [kW]",
    flex: 20,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "generationPV1b",
    headerName: "Generacja PV1b [kW]",
    flex: 20,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "generationPV2",
    headerName: "Generacja PV2 [kW]",
    flex: 20,
    headerAlign: "center",
    align: "center",
    sortable: false
  }, {
    field: "chargeLevelB1",
    headerName: "SOC Magazyn Bateryjny 1 [%]",
    flex: 25,
    type: "number",
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "setChargeB1",
    headerName: "Zadaj moc magazyn bateryjny 1 [%]",
    editable: true,
    flex: 30,
    type: "number",
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "chargeLevelB2",
    headerName: "SOC Magazyn Bateryjny 2 [%]",
    flex: 25,
    type: "number",
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "setChargeB2",
    headerName: "Zadaj moc magazyn bateryjny 2 [%]",
    editable: true,
    flex: 30,
    type: "number",
    headerAlign: "center",
    align: "center",
    sortable: false
  },

];

const ControlTable = ({ tableRows }: { tableRows: ParsedDataInterface[] }) => {
  if (!tableRows) return <div>Ładowanie..</div>;

  return (
    <div style={{ height: 550, width: "100%", overflowX: 'scroll' }}>
      <DataGrid
        sx={{ minWidth: 1950 }}
        rows={tableRows}
        columns={columns}
        disableColumnMenu
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
