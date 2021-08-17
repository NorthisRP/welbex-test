import React from "react";
import { FilterContent, Select, Input } from "./../styled";

export default function Filter({
  cols,
  colHandler,
  valueHandler,
  operationHandler,
}) {
  return (
    <FilterContent>
      <Select
        onChange={(event) => {
          colHandler(event);
        }}
      >
        {cols && cols.slice(2).map((col, i) => <option key={i}>{col}</option>)}
      </Select>
      <Select
        onChange={(event) => {
          operationHandler(event);
        }}
      >
        <option>Равно</option>
        <option>Содержит</option>
        <option>Больше</option>
        <option>Меньше</option>
      </Select>
      <Input
        onChange={(event) => {
          valueHandler(event);
        }}
      />
    </FilterContent>
  );
}
