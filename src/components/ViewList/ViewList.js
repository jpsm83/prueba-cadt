import Modal from "react-modal";
import "./ViewList.css";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";
import { ChevronDoubleUpIcon } from "@heroicons/react/solid";
import { useState } from "react";
import DesignsService from "../../services/designs.service";
import SetoutsService from "../../services/setouts.service";
import { useNavigationType } from "react-router-dom";
Modal.setAppElement("#root");

export default function ViewList(props) {
  const designsService = new DesignsService();
  const setoutsService = new SetoutsService();

  const [data, setData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (selectedRow) => {
    setData(selectedRow);
    console.log(selectedRow);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const id = data.id;
    const uploadData = data;
    if (typeOpt === "Desing") {
      designsService
        .updateOne(id, uploadData)
        .then(() => {
          console.log("updated");
          fetchData();
          closeModal();
        })
        .catch((err) => console.log(err));
    } else {
      if (typeOpt === "Setout") {
        setoutsService
          .updateOne(id, uploadData)
          .then(() => {
            console.log("updated");
            fetchData();
            closeModal();
          })
          .catch((err) => console.log(err));
      } else return;
    }
  };

  const { typeOpt, fetchData } = props;
  const {
    getTableProps,
    pageOptions,
    state: { pageIndex, pageSize },
    canNextPage,
    canPreviousPage,
    nextPage,
    previousPage,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageCount,
    gotoPage,
    setPageSize,
  } = props.tableInstance;

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
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <ChevronDoubleUpIcon
                        style={{ color: "green", height: 15 }}
                      />
                    ) : (
                      <ChevronDoubleDownIcon
                        style={{ color: "red", height: 15 }}
                      />
                    )
                  ) : (
                    ""
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, idx) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={isEven(idx) ? "evenRow" : "oddRow"}
                onClick={() => openModal(row.original)}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <br />
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[3, 5, 9].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Edit {typeOpt}</h2>
        <button onClick={closeModal}>close</button>
        <p>{data.courses}</p>
        <form onSubmit={(event) => onSubmit(event)}>
          <input
            type="text"
            name="name"
            className=""
            value={data.name}
            onChange={(e) => onChange(e)}
          />
          <input
            type="number"
            name="courses"
            className=""
            value={data.courses}
            onChange={(e) => onChange(e)}
          />
          <input
            type="number"
            name="wales"
            className=""
            value={data.wales}
            onChange={(e) => onChange(e)}
          />
          <input
            type="date"
            name="updated"
            className=""
            value={data.updated}
            onChange={(e) => onChange(e)}
          />
          <input
            type="text"
            name="by"
            className=""
            value={data.user_id_last_update}
            onChange={(e) => onChange(e)}
          />
          <button type="submit">Update</button>
        </form>
      </Modal>
    </div>
  );
}
