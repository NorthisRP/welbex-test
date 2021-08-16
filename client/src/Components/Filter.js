import React from "react";

export default function Filter({
  cols,
  colHandler,
  valueHandler,
  operationHandler,
}) {
  return (
    <div style={{ display: "flex", margin: "20px 0" }}>
      <select
        onChange={(event) => {
          colHandler(event);
        }}
      >
        {cols && cols.slice(2).map((col, i) => <option key={i}>{col}</option>)}
      </select>
      <select
        onChange={(event) => {
          operationHandler(event);
        }}
      >
        <option>Равно</option>
        <option>Содержит</option>
        <option>Больше</option>
        <option>Меньше</option>
      </select>
      <input
        onChange={(event) => {
          valueHandler(event);
        }}
      />
    </div>
  );
}
