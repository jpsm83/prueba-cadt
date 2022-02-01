import { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "../../components/Columns/DesignsColumns";
// import "./Designs.scss";
import Navbar from "../../components/Navbar/Navbar";
import ViewList from "../../components/ViewList/ViewList";
import DesignsService from "../../services/designs.service";

export default function Designs() {
  const [designs, setDesigns] = useState([]);

  const designsService = new DesignsService();

  useEffect(() => {
    const fetchDesigns = async () => {
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
    fetchDesigns();
  }, []);

  // useMemo avoid the data to be recreated every time component is call
  // it uses the memory of whatever is render and use it again improving app performance
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => designs, [designs]);

  const tableInstance = useTable({
    columns,
    data,
  });

  return (
    <div>
      <Navbar />
      <ViewList
        designs={{ ...designs }}
        tableInstance={{ ...tableInstance }}
        type="designs"
      />
    </div>
  );
}
