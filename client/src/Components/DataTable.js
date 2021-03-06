import React from "react";
import { Table, Cover } from "./../styled";

export default function DataTable({ data, sortHandler, firstObj, lastObj }) {
  const currentObjs = data.slice(firstObj, lastObj);

  return (
    <Cover>
      <Table>
        <thead>
          <tr>
            {data[0] &&
              Object.keys(data[0])
                .slice(1)
                .map((key, i) => (
                  <th
                    key={i}
                    onClick={sortHandler}
                    style={{ cursor: "pointer" }}
                  >
                    {key}
                  </th>
                ))}
          </tr>
        </thead>
        <tbody>
          {currentObjs.map((el) => (
            <tr key={el["id"]}>
              {Object.values(el)
                .slice(1)
                .map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Cover>
  );
}
