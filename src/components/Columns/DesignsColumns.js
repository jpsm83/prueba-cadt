import moment from "moment";

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Courses",
    accessor: "courses",
  },
  {
    Header: "Wales",
    accessor: "wales",
  },
  {
    Header: "Last Update",
    accessor: "updated",
    Cell: ({ value }) => {
      return moment(value).format("DD/MM/YY");
    },
  },
  {
    Header: "By",
    accessor: "user_id_last_update",
  },
];
