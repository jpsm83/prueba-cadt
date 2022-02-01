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
    id: "updated",
    Header: "Last Update",
    accessor: (itemDate) => {
      return moment(itemDate.updated).local().format("DD/MM/YY");
    },
  },
  {
    Header: "By",
    accessor: "user_id_last_update",
  },
];
