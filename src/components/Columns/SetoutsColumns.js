import moment from "moment";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Machine Name",
    accessor: "machine_name",
  },
  {
    Header: "Machine Width",
    accessor: "machine_width",
  },
  {
    Header: "Courses",
    accessor: "courses",
  },
  {
    Header: "Last Updated",
    accessor: "updated",
    Cell: ({ value }) => {
      return moment(value).format("D/MM/YY");
    },
  },
];
