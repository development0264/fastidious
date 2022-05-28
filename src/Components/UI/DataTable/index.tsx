import {
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";

interface TableProps {
  columns: string[];
  dataItems: any[];
  [key: string]: string | number | any;
}

const DataTable = (props: TableProps) => {
  const { columns, dataItems,handleClick } = props;
  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((item, index) => (
            <TableCell key={index}>{item}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {dataItems.map((rows) => {
          return (
            <TableRow>
              {Object.keys(rows).map((item) => {
                if (item === "status") {
                  return (
                    <TableCell>
                      {rows[item] === 0 ? (
                        <Chip color="success" label="Open" />
                      ) : (
                        <Chip color="error" disabled label="Closed" />
                      )}
                    </TableCell>
                  );
                } else {
                  return <TableCell>{rows[item]}</TableCell>;
                }
              })}
              {columns[columns.length - 1] === "Action" && (
                <TableCell>
                    <Button
                      color="success"
                      onClick={()=>handleClick(rows.no)}
                      disabled={rows?.status !== 0}
                      variant="contained"
                    >
                      {rows?.status !== 0 ? "Resolved" : "Resolve"}
                    </Button>
                
                </TableCell>
              )}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default DataTable;
