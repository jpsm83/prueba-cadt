// import { useNavigate } from "react-router-dom";

export default function ViewList(props) {
  // const navigate = useNavigate();

  // const editItem = (id) => {
  //   navigate(`/edit-${props.type}/${id}`);
  // };

  // those are props - methos from the react-table package
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    props.tableInstance;

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
