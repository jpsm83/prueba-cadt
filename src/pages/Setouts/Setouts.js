import { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "../../components/Columns/SetoutsColumns";
// import "./Setouts.scss";
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

  const tableInstance = useTable({
    columns,
    data,
  });

  return (
    <div>
      <Navbar />
      <ViewList
        setouts={{ ...setouts }}
        tableInstance={{ ...tableInstance }}
        type="setouts"
      />
    </div>
  );
}
