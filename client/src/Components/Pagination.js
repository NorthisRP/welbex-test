import React, { useState, useEffect } from "react";
import { Page, Paginator } from "../styled";

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

    if (Number(currentPage) < 5)
      setCurrentButtons([
        ...buttonPages.slice(0, maxButtons),
        dotsInitial,
        pages,
      ]);
    else if (currentPage > 4 && Number(currentPage) + 4 < pages)
      setCurrentButtons([
        1,
        dotsInitial,
        ...buttonPages.slice(Number(currentPage) - 3, Number(currentPage) + 2),
        dotsInitial,
        pages,
      ]);
    else if (Number(currentPage) + 4 >= pages)
      setCurrentButtons([1, dotsInitial, ...buttonPages.slice(-maxButtons)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pages]);

  return (
    <Paginator>
      {currentButtons.map((el, i) => (
        <Page
          key={i}
          onClick={(event) => {
            if (Number(event.target.textContent))
              setCurrentPage(event.target.textContent);
          }}
        >
          {el}
        </Page>
      ))}
    </Paginator>
  );
}
