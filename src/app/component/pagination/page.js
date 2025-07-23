"use client";
import React from "react";
import left from "../../assets/pagination/left.png";
import double_left from "../../assets/pagination/double-left.png";
import right from "../../assets/pagination/right.png";
import double_right from "../../assets/pagination/double-right.png";
import Image from "next/image";
import { useMyContext } from "@/app/context/page";

const Pagination = () => {
  const { state, handleState } = useMyContext();
  const totalPage =
    state.gridClick === "four"
      ? Math.ceil(state.totals / (state.size * 3))
      : Math.ceil(state.totals / state.size);

  return (
    <div className="flex justify-end items-center gap-5 px-5 text-gray-700 h-15 my-5 shadow-2xl rounded">
      <div className="flex gap-3">
        <div>Rows per Page</div>
        <select
          className="border border-gray-600 rounded"
          value={state.size}
          onChange={(e) => handleState({ size: e.target.value })}
        >
          {Array(5)
            .fill(0)
            .map((ele, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
        </select>
      </div>
      <div>{`Page ${state.page} of ${totalPage}`}</div>
      <div className="flex gap-5">
        <Image
          src={double_left}
          width={15}
          height={15}
          alt="pagination"
          className={`${
            state.page === 1
              ? "cursor-not-allowed opacity-[50%]"
              : "cursor-pointer"
          }`}
          onClick={() => {
            if (state.page === 1) {
              return null;
            } else {
              handleState({ page: 1 });
            }
          }}
        />
        <Image
          src={left}
          width={15}
          height={15}
          alt="pagination"
          className={`${
            state.page === 1
              ? "cursor-not-allowed opacity-[50%]"
              : "cursor-pointer"
          }`}
          onClick={() => {
            if (state.page === 1) {
              return null;
            } else {
              handleState({ page: state.page - 1 });
            }
          }}
        />
        <Image
          src={right}
          width={15}
          height={15}
          alt="pagination"
          className={`${
            state.page === totalPage
              ? "cursor-not-allowed opacity-[50%]"
              : "cursor-pointer"
          }`}
          onClick={() => {
            if (state.page === totalPage) {
              return null;
            } else {
              handleState({ page: state.page + 1 });
            }
          }}
        />
        <Image
          src={double_right}
          width={15}
          height={15}
          alt="pagination"
          className={`${
            state.page === totalPage
              ? "cursor-not-allowed opacity-[50%]"
              : "cursor-pointer"
          }`}
          onClick={() => {
            if (state.page === totalPage) {
              return null;
            } else {
              handleState({ page: totalPage });
            }
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
