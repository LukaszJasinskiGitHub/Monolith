import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { ParsedDataInterface } from "../";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 10,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "date",
    headerName: "Data",
    flex: 20,
    sortable: false
  },
  {
    field: "price",
    headerName: "Cena [zł]",
    flex: 20,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "temperature",
    headerName: "Temp (°C)",
    flex: 20,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "load",
    headerName: "Odbiór [kW]",
    flex: 20,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "generation",
    headerName: "Generacja [kW]",
    flex: 20,
    headerAlign: "center",
    align: "center",
    sortable: false
  },
  {
    field: "setCharge",
    headerName: "Zadaj moc ładownia pojazdu [%]",
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

