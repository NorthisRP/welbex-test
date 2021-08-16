const { Router } = require("express");
const router = Router();
const pgp = require("pg-promise")({
  capSQL: true,
});
const db = pgp("postgres://postgres:123@localhost:5432/welbextest");

router.get("/data", async (req, res) => {
  try {
    let data = await db.any("SELECT * FROM sometable");
    //поменяем формат даты
    data = data.map((obj) => {
      return { ...obj, date: obj.date.toLocaleDateString() };
    });
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}` });
  }
});

module.exports = router;
