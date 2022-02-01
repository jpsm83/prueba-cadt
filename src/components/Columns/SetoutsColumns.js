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
    id: "updated",
    Header: "Last Updated",
    accessor: (itemDate) => {
      return moment(itemDate.updated).local().format("DD/MM/YY");
    },
  },
];
