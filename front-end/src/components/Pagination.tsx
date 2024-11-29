import React from "react";

function Pagination({ totalPosts, postPerPage, setCurrentPage, currentPage }) {
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center items-center gap-2">
      {pages.map((i, inx) => (
        <button
          className={`cursor-pointer py-2 px-4 rounded-lg ${
            i == currentPage ? "bg-black text-white" : "bg-zinc-200 text-black"
          }`}
          onClick={() => setCurrentPage(i)}
          key={inx}
        >
          {i}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
