import "./ViewList.css";
import { ChevronDoubleDownIcon } from '@heroicons/react/solid';
import { ChevronDoubleUpIcon } from '@heroicons/react/solid'

export default function ViewList(props) {

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    props.tableInstance;

const isEven = (idx) => idx % 2 === 0;

  return (
    <div className="viewListContainer">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                {column.isSorted ? (column.isSortedDesc ? <ChevronDoubleUpIcon style={{color: "green", height: 15}} /> : <ChevronDoubleDownIcon style={{color: "red", height: 15}} />) : ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={isEven(idx) ? "evenRow" : "oddRow"}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
