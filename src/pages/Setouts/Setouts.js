import { useState, useEffect, useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { COLUMNS } from "../../components/Columns/SetoutsColumns";
import "./Setouts.css";
import Navbar from "../../components/Navbar/Navbar";
import ViewList from "../../components/ViewList/ViewList";
import SetoutsService from "../../services/setouts.service";

export default function Setouts() {
  const [setouts, setSetouts] = useState([]);

  const setoutsService = new SetoutsService();

  useEffect(() => {
    const fetchSetouts = async () => {
      try {
        const response = await setoutsService.get();
        // using axios we dont need response.json because it is already parse
        // response.data is the right optoin
        const listSetouts = await response.data;
        setSetouts(listSetouts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSetouts();
  }, []);

  // useMemo avoid the data to be recreated every time component is call
  // it uses the memory of whatever is render and use it again improving app performance
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => setouts, [setouts]);

  // const columns = useMemo(() => setouts[0] ? Object.keys(setouts[0]).map((key) => { return { Header: key, accessor: key}}) : [], [setouts]);

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
          setouts={{ ...setouts }}
          tableInstance={{ ...tableInstance }}
        />
      </div>
    </div>
  );
}
