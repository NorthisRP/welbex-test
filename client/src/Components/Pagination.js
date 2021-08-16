import React from "react";

export default function Pagination({ paginate, pages, currentPage }) {
  const getPaginator = (pages) => {
    let buttonPages = [];
    for (let i = 0; i < pages; i++) {
      buttonPages.push(
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
          onClick={paginate}
        >
          {i + 1}
        </div>
      );
    }
    return buttonPages;
  };

  return <div style={{ display: "flex" }}>{getPaginator(pages)}</div>;
}
