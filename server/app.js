const express = require("express");
const app = express();

app.use("/api/load", require("./routes/load.routes"));

const PORT = 5000;
async function start() {
  try {
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
  } catch (error) {
    console.log(`Server error`, error.message);
    process.exit(1);
  }
}

start();
/// Ниже представлен код для генерации данных в бд
/*
const pgp = require("pg-promise")({
  capSQL: true,
});
const db = pgp("postgres://postgres:123@localhost:5432/welbextest");

const cs = new pgp.helpers.ColumnSet(
  ["id", "date", "name", "quantity", "distance"],
  { table: "sometable" }
);
const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
const createObjectsArray = (len) => {
  const objs = [];
  for (let i = 0; i < len; i++) {
    objs.push({
      id: i + 1,
      date: randomDate(new Date(2012, 0, 1), new Date()),
      name: Math.random().toString(36).substr(2, 12),
      quantity: getRandomIntInclusive(1, 300),
      distance: getRandomIntInclusive(1, 1000),
    });
  }
  return objs;
};
const values = createObjectsArray(1000);

const query = pgp.helpers.insert(values, cs);
await db.none(query);
*/
