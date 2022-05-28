import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface TableProps {
  columns: string[];
  dataItems: any[];
  [key: string]: string | number | any;
}

const DataTable = (props: TableProps) => {
  const { columns, dataItems } = props;
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
                return <TableCell>{rows[item]}</TableCell>;
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default DataTable;
