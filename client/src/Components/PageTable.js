import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "./DataTable";
import Pagination from "./Pagination";
import Filter from "./Filter";
import { Content } from "../styled";

export default function PageTable() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [operation, setOperation] = useState("Равно");
  const [col, setCol] = useState("name");
  const [value, setValue] = useState("");
  const objsPerPage = 20;

  useEffect(() => {
    axios
      .get("api/load/data")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const operationHandler = (event) => {
    setCurrentPage(1);
    setOperation(event.target.value);
  };
  const colHandler = (event) => {
    setCurrentPage(1);
    setCol(event.target.value);
  };
  const valueHandler = (event) => {
    setCurrentPage(1);
    setValue(event.target.value);
  };
  useEffect(() => {
    if (!value) return setFilteredData(data);
    switch (operation) {
      case "Равно":
        return setFilteredData(
          data.filter((obj) => obj[col].toString() === value)
        );
      case "Больше":
        return setFilteredData(data.filter((obj) => obj[col] > value));
      case "Меньше":
        return setFilteredData(data.filter((obj) => obj[col] < value));
      case "Содержит":
        const re = new RegExp(`${value}`);
        return setFilteredData(
          data.filter((obj) => re.test(obj[col].toString()))
        );
      default:
        return;
    }
  }, [operation, value, col, data]);

  const sortHandler = (event) => {
    setFilteredData(data.slice());
    const col = event.target.textContent;
    switch (col) {
      case "name":
        return setFilteredData(
          filteredData.sort((a, b) => (a[col] > b[col] ? 1 : -1)).slice()
        );
      case "date":
        return setFilteredData(
          filteredData
            .sort((a, b) => {
              const [aDay, aMonth, aYear] = a.date.split(".");
              const [bDay, bMonth, bYear] = b.date.split(".");
              return (
                new Date(aYear, aMonth, aDay) - new Date(bYear, bMonth, bDay)
              );
            })
            .slice()
        );
      default:
        return setFilteredData(
          filteredData.sort((a, b) => a[col] - b[col]).slice()
        );
    }
  };

  const lastObj = currentPage * objsPerPage;
  const firstObj = lastObj - objsPerPage;

  const pages = Math.ceil(filteredData.length / objsPerPage);

  return (
    <Content>
      <Filter
        cols={data[0] && Object.keys(data[0])}
        operationHandler={operationHandler}
        colHandler={colHandler}
        valueHandler={valueHandler}
      />
      {data ? (
        <DataTable
          data={filteredData}
          sortHandler={sortHandler}
          lastObj={lastObj}
          firstObj={firstObj}
        />
      ) : (
        <h1>Loading...</h1>
      )}
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pages={pages}
      />
    </Content>
  );
}
