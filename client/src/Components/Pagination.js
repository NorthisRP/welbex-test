import React, { useState, useEffect } from "react";

export default function Pagination({ pages, setCurrentPage, currentPage }) {
  const maxButtons = 6;

  const buttonPages = [];
  for (let i = 0; i < pages; i++) {
    buttonPages.push(i + 1);
  }
  const [currentButtons, setCurrentButtons] = useState(buttonPages);

  useEffect(() => {
    const dotsInitial = "...";
    if (pages <= 10) return setCurrentButtons(buttonPages);

    if (Number(currentPage) === 1)
      setCurrentButtons([
        ...buttonPages.slice(0, maxButtons),
        dotsInitial,
        pages,
      ]);
    else if (currentPage > 3 && Number(currentPage) + 3 < pages)
      setCurrentButtons([
        1,
        dotsInitial,
        ...buttonPages.slice(Number(currentPage) - 2, Number(currentPage) + 2),
        dotsInitial,
        pages,
      ]);
    else if (Number(currentPage) + 3 >= pages)
      setCurrentButtons([1, dotsInitial, ...buttonPages.slice(-maxButtons)]);
  }, [currentPage, pages]);

  return (
    <div style={{ display: "flex" }}>
      {currentButtons.map((el, i) => (
        <div
          style={{
            padding: "1px",
            margin: "1px",
            width: "30px",
            height: "30px",
            lineHeight: "30px",
            textAlign: "center",
            border: "1px solid black",
            cursor: "pointer",
          }}
          key={i}
          onClick={(event) => {
            setCurrentPage(event.target.textContent);
          }}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
