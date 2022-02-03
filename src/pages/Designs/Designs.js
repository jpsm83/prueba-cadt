import { useState, useEffect, useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { COLUMNS } from "../../components/Columns/DesignsColumns";
import "./Designs.css";
import Navbar from "../../components/Navbar/Navbar";
import ViewList from "../../components/ViewList/ViewList";
import DesignsService from "../../services/designs.service";

export default function Designs() {
  const [designs, setDesigns] = useState([]);

  const designsService = new DesignsService();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await designsService.get();
      // using axios we dont need response.json because it is already parse
      // response.data is the right optoin
      const listDesigns = await response.data;
      setDesigns(listDesigns);
    } catch (error) {
      console.log(error);
    }
  };

  // useMemo avoid the data to be recreated every time component is call
  // it uses the memory of whatever is render and use it again improving app performance
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => designs, [designs]);

  // const columns = useMemo(() => designs[0] ? Object.keys(designs[0]).map((key) => { return { Header: key, accessor: key}}) : [], [designs]);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="designContainer">
      <div className="navContainer">
        <Navbar />
      </div>
      <div className="listContainer">
        <ViewList
          designs={{ ...designs }}
          tableInstance={{ ...tableInstance }}
          typeOpt="Design"
          fetchData={() => fetchData()}
        />
      </div>
    </div>
  );
}
