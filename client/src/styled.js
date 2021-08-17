import styled from "styled-components";

export const Cover = styled.div`
  height: 815px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 20px 0;
  tr {
    height: 35px;
    line-height: 35px;
  }
  tbody > tr:nth-child(even) {
    background-color: rgb(214, 221, 255);
  }
  tbody > tr:hover {
    background-color: rgb(173, 183, 252);
  }
  thead > tr {
    background-color: rgb(68, 96, 255);
    color: whitesmoke;
  }
  th,
  td {
    width: 200px;
    text-align: center;
  }
`;
export const Content = styled.div`
  width: 800px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FilterContent = styled.div`
  display: flex;
`;
export const Select = styled.select`
  width: 100px;
  height: 30px;
  margin-right: 10px;
  line-height: 28px;
  font-size: 16px;
`;
export const Input = styled.input`
  width: 120px;
  font-size: 20px;
`;
export const Paginator = styled.div`
  display: flex;
`;
export const Page = styled.div`
  margin-right: 10px;
  border-radius: 40px;
  border: 3px solid rgb(68, 96, 255);
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: rgb(214, 221, 255);
    color: rgb(68, 96, 255);
  }
  &:active {
    background-color: rgb(128, 156, 255);
    color: white;
  }
`;
